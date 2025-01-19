
---
to push to eb follow below 

// at project root .ebextension is not required
rm -rf publish/
dotnet publish -c Release -o ./publish
cd publish
zip -r ../newsroom-api.zip * 
zip -r ../newsroom-api.zip * .platform/nginx/conf.d/ // didn;t work


Newsroom-api-env-test
Newsroom-api-env-test
newsroom-api-env-production




### **📰 News API - JWT Authentication & Role-Based Access Control**
A **.NET 8.0** Web API for managing news articles, featuring **JWT authentication**, **role-based authorization**, and **in-memory database**.


## **📌 Features**
- ✅ **JWT Authentication** (Login required for certain APIs)
- ✅ **Role-Based Access Control** (`Admin` role required for certain endpoints)
- ✅ **In-Memory Database** for storing **news articles** and **user authentication**
- ✅ **Swagger UI** for API testing
- ✅ **Password Hashing** for secure authentication

---

## **📂 Project Structure**
```
/NewsBackend
│── /Controllers
│   ├── AuthController.cs  # Authentication API
│   ├── NewsController.cs  # News API Endpoints
│── /Models
│   ├── NewsArticle.cs     # News Article Model
│── /Configuration
│   ├── appsettings.json   # JWT Secret Key Configuration
│   ├── appsettings.Development.json  # Development Configurations
│── .gitignore
│── NewsBackend.csproj
│── NewsBackend.http
│── Program.cs             # Application Startup & DbContext
│── README.md              # Project Documentation
│── backend.sln            # Solution File
```

---

## **🛠 Setup & Installation**
### **🔹 1. Clone the Repository**
```sh
git clone https://github.com/yourusername/news-api.git
cd news-api
```

### **🔹 2. Install Dependencies**
```sh
dotnet restore
```

### **🔹 3. Run the Application**
```sh
dotnet run
```

### **🔹 4. Open Swagger UI**
Once the application is running, open **Swagger UI** in your browser:
```
http://localhost:5555/swagger/index.html
```

---

## **🔑 Authentication & Authorization**
### **User Roles:**
- **Admin** → Can perform `POST`, `PUT`, `DELETE`
- **Normal User** → Can only perform `GET`

### **🔹 Default Admin User**
| Username | Password | Role |
|----------|---------|------|
| `admin`  | `*************` | `Admin` |

To access **protected APIs**, log in first to receive a **JWT token**.

---

## **📌 API Endpoints**
### **🛠 1. Authentication APIs**
| Method | Endpoint          | Access | Description |
|--------|------------------|--------|-------------|
| `POST` | `/api/auth/login` | Public | Authenticate user & get JWT token |

#### **📝 Login Example**
**Request:**  
```http
POST /api/auth/login
Content-Type: application/json
```
```json
{
    "username": "admin",
    "password": "divya"
}
```
**Response:**  
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```
🔹 Copy the `token` and **add it as `Authorization: Bearer <token>`** in all protected endpoints.

---

### **📰 2. News APIs**
| Method   | Endpoint           | Access  | Description |
|----------|-------------------|---------|-------------|
| `GET`    | `/api/news`        | Public  | Get all news articles |
| `POST`   | `/api/news`        | `Admin` | Create a new news article |
| `PUT`    | `/api/news/{id}`   | `Admin` | Update a news article |
| `DELETE` | `/api/news/{id}`   | `Admin` | Delete a news article |

#### **📝 Example Requests**
✅ **Get All News**  
```http
GET /api/news
```
_Response:_
```json
[
    { "id": 1, "title": "Breaking News", "content": "This is the latest news." }
]
```

✅ **Create News (Admin Only)**  
```http
POST /api/news
Authorization: Bearer <admin_jwt_token>
Content-Type: application/json
```
```json
{
    "title": "New Update",
    "content": "This is a new update on the event."
}
```

✅ **Update News (Admin Only)**  
```http
PUT /api/news/1
Authorization: Bearer <admin_jwt_token>
Content-Type: application/json
```
```json
{
    "id": 1,
    "title": "Updated News Title",
    "content": "Updated news content."
}
```

✅ **Delete News (Admin Only)**  
```http
DELETE /api/news/1
Authorization: Bearer <admin_jwt_token>
```
_Response:_
```json
{ "message": "News deleted successfully." }
```

---

## **🛠 Environment Configuration**
Update your `appsettings.json` to configure the **JWT Secret Key**:
```json
{
  "JwtSettings": {
    "SecretKey": "gopalandidvyaverysecurekey12345678"
  }
}
```

---

## **🚀 Future Improvements**
✅ Add **User Registration API**  
✅ Add **Database Persistence (SQL Server or PostgreSQL)**  
✅ Implement **Refresh Tokens for JWT**  

---

## **📜 License**
MIT License. Feel free to use and modify. 🚀

---

### **🔥 Final Notes**
✅ **Use Swagger UI (`http://localhost:5555/swagger/index.html`) to test APIs.**  
✅ **Admin Role Required** for modifying news.  
✅ **Ensure JWT Token is included** in headers for protected endpoints.  

🚀 **Happy Coding!** 🚀

---

