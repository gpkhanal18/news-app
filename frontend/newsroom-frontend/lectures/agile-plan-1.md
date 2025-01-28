Here’s the **updated and comprehensive version** of our project document, now including **additional test cases** to cover all possible scenarios.

---

# **Hamro Patro News Project Development**

## **Project Links**
- **JIRA Board:** [CPG Project](https://smegopal.atlassian.net/jira/software/projects/CPG/boards/1)
- **TestRail:** [TestRail Admin](https://smegopal.testrail.io/index.php?/admin/projects/overview)
- **SketchBoard:** [SketchBoard Project](https://sketchboard.me/JEKk9qceHFnG#/)


---

## **Project Roles & Responsibilities**
- **Business Analysis:** Gopal  
- **Development Team:** Gopal  
- **Testing:** Divya  
- **DevOps:** Gopal  

---

## **Project Requirements**
### **Business Requirements**
1. **Admin Functionalities:**
   - Create news  
   - Update news  
   - Retrieve news  
   - Delete news  

2. **User Functionalities:**
   - View news  
   - No modification or deletion allowed  

---

# **User Stories for JIRA**

### **User Story 1: Admin - Create News**  
**Title:** Admin can create news articles  

**Description:**  
As an **Admin**, I want to create news articles by providing a title, content, category, and publish date, so that users can view updated news on the platform.  

**Acceptance Criteria:**  
- The admin should be able to enter the **title**, **content**, **category**, and **publish date**.  
- The system should save the news article successfully.  
- The article should be visible in the news feed after creation.  
- A validation error should be displayed if any required field is missing.  

---

### **User Story 2: Admin - Update News**  
**Title:** Admin can update existing news articles  

**Description:**  
As an **Admin**, I want to edit news articles so that I can make corrections or updates when necessary.  

**Acceptance Criteria:**  
- The admin should be able to modify the **title, content, category, and publish date**.  
- The system should update the article successfully.  
- The updated article should be reflected in the news feed.  
- A validation error should be displayed if required fields are missing.  

---

### **User Story 3: Admin - Delete News**  
**Title:** Admin can delete news articles  

**Description:**  
As an **Admin**, I want to delete news articles so that outdated or incorrect information can be removed.  

**Acceptance Criteria:**  
- The admin should be able to select an article and delete it.  
- The system should prompt for confirmation before deleting.  
- The deleted article should no longer appear in the news feed.  

---

### **User Story 4: User - View News**  
**Title:** Users can view news articles  

**Description:**  
As a **User**, I want to browse and read news articles so that I stay updated with the latest information.  

**Acceptance Criteria:**  
- Users should be able to see a list of news articles.  
- Clicking on an article should display the full content.  
- Users should not have access to edit or delete articles.  

---

# **Comprehensive Test Cases for These User Stories**

| **Test Case ID** | **Title**                     | **Description** | **Preconditions** | **Steps** | **Expected Result** | **Status** |
|------------------|--------------------------------|----------------|-------------------|-----------|---------------------|------------|
| **TC001** | Create News - Success | Verify that an admin can successfully create a news article. | Admin logged in | 1. Navigate to "Create News" page. <br> 2. Enter valid title, content, category, and publish date. <br> 3. Click "Submit". | News article is successfully created and visible in the feed. | Pending |
| **TC002** | Create News - Missing Fields | Verify validation when creating news with missing fields. | Admin logged in | 1. Navigate to "Create News" page. <br> 2. Leave the title or content field empty. <br> 3. Click "Submit". | Error message is displayed for missing required fields. | Pending |
| **TC003** | Update News - Success | Verify that an admin can update a news article. | Admin logged in, existing article available | 1. Navigate to "News List". <br> 2. Click "Edit" on an article. <br> 3. Update the title or content. <br> 4. Click "Save". | The article is updated successfully and changes reflect in the news feed. | Pending |
| **TC004** | Update News - Invalid Data | Verify validation when updating news with invalid data. | Admin logged in, existing article available | 1. Navigate to "Edit News" page. <br> 2. Enter blank or invalid content. <br> 3. Click "Save". | Error message is displayed for invalid input. | Pending |
| **TC005** | Delete News - Success | Verify that an admin can delete a news article. | Admin logged in, existing article available | 1. Navigate to "News List". <br> 2. Click "Delete" on an article. <br> 3. Confirm the deletion. | The article is removed from the feed. | Pending |
| **TC006** | Delete News - Cancel | Verify that an admin can cancel deletion. | Admin logged in, existing article available | 1. Navigate to "News List". <br> 2. Click "Delete" on an article. <br> 3. Click "Cancel" in the confirmation prompt. | Article is not deleted. | Pending |
| **TC007** | View News - User Access | Verify that a user can view but not edit or delete news. | User logged in | 1. Navigate to the "News Feed". <br> 2. Click on a news article. | The full article is displayed, and there are no edit/delete options available. | Pending |
| **TC008** | View News - Unauthorized User | Verify that an unauthenticated user can view news. | Not logged in | 1. Open the website. <br> 2. Navigate to the "News Feed". <br> 3. Click on a news article. | The article is displayed, but no admin actions (edit/delete) are available. | Pending |

---

# **How to Create These User Stories in JIRA**
1. **Log into JIRA** and navigate to your **CPG Project**.
2. Click on **"Create"** to add a new issue.
3. Set the **Issue Type** to **Story**.
4. Enter the **Title**, **Description**, and **Acceptance Criteria** (as written above).
5. Assign the story to the **Development Team**.
6. Add relevant **Labels**, such as "News-Feature".
7. Click **"Create"**.

---

# **How to Create These Test Cases in TestRail**
1. **Log into TestRail** and go to the **CPG Project**.
2. Navigate to **Test Cases** and click **"Add Test Case"**.
3. Enter the **Test Case Title**.
4. Add **Steps** and **Expected Results**.
5. Assign the test case to **QA (Divya)**.
6. Click **Save**.

---

This version ensures **comprehensive test coverage**, reducing risks and improving system reliability. 🚀 Let me know if you need any modifications!
