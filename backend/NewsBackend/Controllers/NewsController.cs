using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewsBackend.Models;


namespace NewsBackend.Controllers
{
    [ApiController]
    [Route("api/news")]
    public class NewsController : ControllerBase
    {

        private readonly AppDbContext _context;

        public NewsController(AppDbContext context){
            _context = context;
        }

        // Get All Articles 
        [HttpGet]
        public async Task<IActionResult> GetAll(){
           var news =  await _context.NewsArticles.ToListAsync();
            return Ok(news);
        }

        // Create a News Article Admin Only 
        
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> Create(NewsArticle newsArticle){
            newsArticle.PublishedAt = DateTime.UtcNow;
            _context.NewsArticles.Add(newsArticle);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAll), new {id = newsArticle.Id}, newsArticle);

        }

        // Update an article
        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, NewsArticle article)
        {
            var existingArticle = await _context.NewsArticles.FindAsync(id);
            if (existingArticle == null)
                return NotFound();

            existingArticle.Title = article.Title;
            existingArticle.Content = article.Content;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // Delete an article
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var article = await _context.NewsArticles.FindAsync(id);
            if (article == null)
                return NotFound();

            _context.NewsArticles.Remove(article);
            await _context.SaveChangesAsync();
            return NoContent();
        }



    }
}