### **📰 Newsroom Backend - AWS Elastic Beanstalk Deployment Guide** 🚀

This guide provides step-by-step instructions to **deploy the Newsroom API** to **AWS Elastic Beanstalk (EB)** for both **Testing** and **Production** environments using the AWS Console.

---

## **📌 Deployment Instructions**
### **1️⃣ Publish the .NET Application**
Run the following commands **from the project root folder** to build and publish the application:

```sh
# Remove any previous build output (Run from the project root)
rm -rf publish/

# Publish the .NET application in Release mode (Run from the project root)
dotnet publish -c Release -o ./publish
```

✅ **This ensures that all required `.dll` files and dependencies are included inside the `publish/` folder.**

---

### **2️⃣ Create a Deployment Package**
After publishing, navigate to the `publish` directory and create a ZIP file containing all required files.

```sh
cd publish
zip -r ../newsroom-api.zip *
```

✅ **Ensure that this ZIP file contains all the necessary `.dll` files directly, so when AWS Elastic Beanstalk unzips it, the application runs smoothly.**

---

### **3️⃣ Upload the ZIP File to AWS Elastic Beanstalk (EB)**
#### **Using AWS Console**
1. **Log in to AWS Console** → Go to **Elastic Beanstalk**.
2. Select your **environment**:
   - **Testing:** `Newsroom-api-env-test`
   - **Production:** `newsroom-api-env-production`
3. Click on **Upload and Deploy**.
4. Click **Choose File**, select `newsroom-api.zip` (created in Step 2).
5. Click **Deploy** and wait for the deployment process to complete.

---

## **🌍 AWS Elastic Beanstalk Environments**
| **Environment** | **Elastic Beanstalk Name** |
|---------------|---------------------------|
| **Testing** | `Newsroom-api-env-test` |
| **Production** | `newsroom-api-env-production` |

---

## **✅ Summary**
| Step | Command |
|------|---------|
| **Remove old build files** (Run from project root) | `rm -rf publish/` |
| **Publish .NET app** (Run from project root) | `dotnet publish -c Release -o ./publish` |
| **Create ZIP package** | `cd publish && zip -r ../newsroom-api.zip *` |
| **Upload to AWS EB using AWS Console** | Go to **AWS EB**, click **Upload and Deploy**, and select the ZIP file |

🚀 **Your Newsroom API is now deployed and running on AWS Elastic Beanstalk!** 🎉

---

For any issues, check:
- **AWS EB Logs** (`Logs` > `Request Logs` in AWS Console)
- **Elastic Beanstalk Dashboard**

Happy coding! 😊




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

