# How-To Guide

Step-by-step workflows for common tasks with the "Contact Form – File Upload" plugin.

---

## How the Plugin Works

### File Upload Flow

```
Customer selects file → Plugin checks extension & size → File saved to media library → Email with attachment sent
```

**Detailed flow**:
1. Customer fills out the contact form and selects one or more files
2. After submission, the plugin checks whether the file extension is in the allowed list
3. The plugin checks whether the total size does not exceed the configured limit
4. Valid files are stored in Shopware's media library in the selected folder
5. The stored files are attached to the contact form email
6. The shop owner receives the email with all attachments

---

## Common Workflows

### How to: Set up the plugin for the first time

**Goal**: Activate and configure the upload field in the contact form

**Time Required**: approx. 5 minutes

**Prerequisites**:
- Plugin installed and activated
- At least one media folder exists in the media library (recommended)

**Steps**:

1. **Create a media folder** (once, recommended)
   - Navigate to: `Content → Media`
   - Click **"Create folder"**
   - Name the folder, e.g. "Contact Form Uploads"
   - Save

2. **Open plugin configuration**
   - Navigate to: `Extensions → My Extensions`
   - Click **"Configure"** next to "Contact form - File upload"

3. **Set allowed file types**
   - Enter the desired extensions in the **"Allowed file extensions"** field
   - Example: `jpg,jpeg,png,pdf`
   - To include CAD files: `jpg,jpeg,png,pdf,dwg,dxf`

4. **Set the size limit**
   - Set **"Max. filesize in MB"** to the desired value (default: 20 MB)

5. **Choose the upload type**
   - **"Multi-File Upload"** is recommended for most use cases

6. **Select the target folder**
   - In **"Choose the folder where uploaded files should be saved"**, select the folder created in step 1

7. **Save and test**
   - Click **"Save"**
   - Open the contact form in the storefront and verify the upload field is visible

**Result**: The upload field appears in the contact form and customers can attach files.

---

### How to: Add a new file extension (e.g. DWG)

**Goal**: Allow a previously unsupported file extension for upload

**Time Required**: approx. 2 minutes

**Steps**:

1. **Open plugin configuration**
   - Navigate to: `Extensions → My Extensions → Contact form - File upload → Configure`

2. **Add the extension**
   - Click the **"Allowed file extensions"** text field
   - Append `,dwg` to the end of the existing list
   - Example before: `jpg,jpeg,png,pdf`
   - Example after: `jpg,jpeg,png,pdf,dwg`

3. **Save**
   - Click **"Save"**

**Result**: Customers can now upload DWG files. The plugin supports all entered extensions — including formats outside Shopware's standard media library.

> **Note**: Case is handled automatically. You do not need to enter both `DWG` and `dwg` separately.

---

### How to: Configure upload per sales channel

**Goal**: Different upload settings for different sales channels

**Time Required**: approx. 5 minutes per sales channel

**Example use case**: B2B shop allows DWG/DXF files, B2C shop only JPG/PDF

**Steps**:

1. **Open plugin configuration**
   - Navigate to: `Extensions → My Extensions → Contact form - File upload → Configure`

2. **Select a sales channel**
   - Use the dropdown at the top of the page to select the desired sales channel (instead of "All Sales Channels")

3. **Configure channel-specific settings**
   - Adjust the desired settings (these apply only to the selected sales channel)

4. **Save**
   - Click **"Save"**

5. **Repeat for other sales channels**

**Result**: Each sales channel has its own upload settings.

---

### How to: Use the upload field in the Form Builder

**Goal**: Add an upload field to a custom form (Shopping Experience)

**Prerequisites**: Shopware plan Rise, Evolve, or Beyond (CMS Extensions)

**Steps**:

1. **Open Shopping Experiences**
   - Navigate to: `Content → Shopping Experiences`
   - Select and edit the desired Shopping Experience

2. **Find the form block**
   - Select the CMS block containing the form in the layout editor

3. **Add an upload field**
   - Click **"Add field"** in the form editor
   - Select **"File Upload"** or **"File Upload (Multiple)"** as the field type
   - Enter a field label (e.g. "Attachment" or "Technical Drawing")

4. **Save and publish**
   - Save changes
   - Publish the Shopping Experience

**Result**: The upload field is available in the custom form.

---

## Quick Reference

| Task                          | Navigation                                                                  | Key Setting                       |
| ----------------------------- | --------------------------------------------------------------------------- | --------------------------------- |
| Change allowed file types     | Extensions → My Extensions → Plugin → Configure                             | Allowed file extensions           |
| Change size limit             | Extensions → My Extensions → Plugin → Configure                             | Max. filesize in MB               |
| Disable upload                | Extensions → My Extensions → Plugin → Configure                             | Enable upload (switch off)        |
| Change target folder          | Extensions → My Extensions → Plugin → Configure                             | Folder for uploaded files         |
| View uploaded files           | Content → Media → [Target folder]                                           | –                                 |

---

## Best Practices

1. **Always set a target folder**: A dedicated folder (e.g. "Contact Form") keeps the media library tidy
2. **Only allow necessary file types**: Restrict allowed extensions to formats you actually need
3. **Align size limit with server settings**: The value should be smaller than the PHP settings `upload_max_filesize` and `post_max_size`
4. **Clean up regularly**: Periodically delete old uploads in the media library to save storage space

## What to Avoid

- ❌ **Allowing all file types** — always use a specific list of allowed extensions
- ❌ **Too large a size limit** without adjusting server settings — the PHP upload limit must be at least as large
- ❌ **Not selecting a target folder** — uploads will end up in the root of the media library and become hard to find
