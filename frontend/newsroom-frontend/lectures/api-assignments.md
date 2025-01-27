### **API Hands-on Assignment: Newsroom API Exploration**  

#### **Objective:**  
Gain practical experience in interacting with REST APIs using CRUD operations (Create, Read, Update, Delete) and authentication mechanisms.

---

## **Part 1: Theory (Concise Questions)**  

### **Q1: Define the following API concepts:**  
1. API Endpoint  
2. Request Methods (GET, POST, PUT, DELETE)  
3. Authorization (Bearer Token)  
4. Headers, Body, and Status Codes  
5. JSON Request and Response  

### **Q2: Answer based on the Newsroom API:**  
1. What is the purpose of the `GET /api/news` request?  
2. How do you authenticate before making a `POST` request?  
3. What happens if you send a request without a `Bearer` token?  
4. How does the `PUT` request modify an existing news entry?  
5. What happens if you try to delete a news article without authentication?  

---

## **Part 2: Practical Hands-on Tasks**  

> **Prerequisites:** Install **Postman** or use `cURL`.  

Use the **Newsroom API Test Environment**:  
`http://newsroom-api-env-test.eba-zskxyjjm.us-east-2.elasticbeanstalk.com/api`  

### **Step 1: Login and Get Authentication Token**  
- **Request Method:** `POST`  
- **URL:** `/auth/login`  
- **Body:**  
```json
{
   "username": "admin",
   "password": ""
}
```  
- **Extract the token from the response.**  

---

### **Step 2: Read Existing News Articles**  
- **Request Method:** `GET`  
- **URL:** `/news`  
- **Expected Response:** List of news articles in JSON format.  

📌 **IMPORTANT:**  
- **Extract the `id` of at least two news articles** from the response for **Step 5 (Update)** and **Step 6 (Delete).**  
- **Example Response:**  
```json
[
   {
      "id": "123456",
      "title": "Sample News",
      "content": "Some content here...",
      "author": "John Doe"
   },
   {
      "id": "789101",
      "title": "Another News",
      "content": "More content...",
      "author": "Jane Doe"
   }
]
```
---

### **Step 3: Create 5 News Articles**  
Use the token from **Step 1**.  

- **Request Method:** `POST`  
- **URL:** `/news`  
- **Headers:** `Authorization: Bearer <token>`  
- **Body:** (Create five different articles)  
```json
{
   "title": "Global Warming Effects",
   "content": "Climate change is causing severe weather conditions worldwide.",
   "author": "John Doe",
   "imageUrl": "https://example.com/image1.jpg"
}
```
*(Repeat this with different titles, authors, and content for five news articles.)*  

---

### **Step 4: Read and Verify Created Articles**  
- **Request Method:** `GET`  
- **URL:** `/news`  
- **Verify that all five articles exist.**  

---

### **Step 5: Update 2 News Articles**  
📌 **IMPORTANT:**  
- **Use the `id` from the `GET /news` API response in Step 2.**  
- **Example: If the article you want to update has `id = 123456`, replace `{id}` in the URL with `123456`.**  

- **Request Method:** `PUT`  
- **URL:** `/news/{id}` (Replace `{id}` with the actual news ID)  
- **Headers:** `Authorization: Bearer <token>`  
- **Body:**  
```json
{
   "title": "Updated Global Warming News",
   "content": "Climate change impact is growing rapidly.",
   "author": "Jane Doe",
   "imageUrl": "https://example.com/newimage.jpg"
}
```

---

### **Step 6: Delete 1 News Article**  
📌 **IMPORTANT:**  
- **Use the `id` from the `GET /news` API response in Step 2.**  
- **Example: If the article you want to delete has `id = 789101`, replace `{id}` in the URL with `789101`.**  

- **Request Method:** `DELETE`  
- **URL:** `/news/{id}` (Replace `{id}` with the actual news ID)  
- **Headers:** `Authorization: Bearer <token>`  

---

### **Step 7: Verify Data Integrity**  
1. Retrieve the **remaining** articles using `GET /news`.  
2. Ensure **updated** articles reflect the changes.  
3. Ensure the **deleted** article no longer exists.  

---

## **Submission Requirements**  
- Provide request and response logs for each step.  
- Answer all theoretical questions concisely.  
- Highlight challenges and solutions encountered.  

---

### **Grading Criteria (100 Points)**  
| Task | Points |
|------|--------|
| Theory Questions | 20 |
| Login Authentication | 15 |
| Creating News Articles (5) | 20 |
| Updating News Articles (2) | 15 |
| Deleting News Article (1) | 10 |
| Data Verification | 20 |
| **Total** | **100** |  

---

This assignment ensures a **complete API cycle**, covering authentication, data creation, updates, deletion, and verification. 🚀
