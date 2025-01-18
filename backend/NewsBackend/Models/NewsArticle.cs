using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsBackend.Models
{
    public class NewsArticle
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public DateTime PublishedAt { get; set; }

        // Store image as a URL (Recommended for scalability)
        public string ImageUrl { get; set; }
    }
}
