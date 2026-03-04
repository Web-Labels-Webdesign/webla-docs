# Usage Guide

This guide describes all features of the "Contact Form – File Upload" plugin from the perspective of shop owners and customers.

---

## Table of Contents

- [The Upload Field in the Storefront](#the-upload-field-in-the-storefront)
- [Drag & Drop](#drag--drop)
- [Multiple Upload](#multiple-upload)
- [Uploaded Files in the Admin](#uploaded-files-in-the-admin)
- [Form Builder Integration](#form-builder-integration)
- [Troubleshooting](#troubleshooting)

---

## The Upload Field in the Storefront

### What It Does

An upload field appears automatically below the standard contact form once the plugin is activated. Customers can use it to attach files before submitting the form.

### What Customers See

The upload field consists of:
- An upload icon with a label
- A click area to open the file dialog
- A drag & drop zone
- A preview of selected files (file names)

**Location in Storefront**: The upload field appears directly within the contact form, before the required fields notice.

### How Customers Upload Files

1. Navigate to the contact form (e.g. `/contact`)
2. Fill in the form fields (name, email, message)
3. Click on the upload area → the file dialog opens
4. Select the desired file(s) and confirm
5. Selected files appear in the preview area
6. Submit the form — files are automatically included

---

## Drag & Drop

### What It Does

Customers can drag files directly from their desktop or file explorer into the upload field without opening the file dialog.

### Special Behaviour

Drag & drop **always** allows uploading multiple files simultaneously — regardless of whether "Single file Upload" or "Multi-File Upload" is selected in the plugin settings. The upload type setting only applies to the classic file dialog.

### How It Works

1. Select file(s) in the file explorer
2. Drag the files onto the upload field in the contact form
3. Release the mouse button — files are added immediately
4. File names appear in the preview area

---

## Multiple Upload

### What It Does

With multiple upload enabled, customers can select several files at once in the file dialog (Ctrl+Click or Shift+Click).

### Size Limit

The size limit configured in the settings applies to the **combined total** of all uploaded files. If the limit is exceeded, an error message is shown and the form cannot be submitted.

### Configuration

Multiple upload is controlled in the plugin settings under **Upload type**. See [Configuration Settings](../configuration/settings.md).

---

## Uploaded Files in the Admin

### Where Files Are Stored

All files uploaded via the contact form are stored in Shopware's media library:

**Navigation**: Content → Media → [Selected target folder]

The target folder is set in the plugin settings under **Choose the folder where uploaded files should be saved**.

### Email Attachments

Uploaded files are automatically added as attachments to the contact form email. The shop owner receives the files directly in the notification email.

### Files in the Media Library

Uploaded files remain permanently in the media library. There you can:
- View them
- Download them
- Delete them manually when no longer needed

> **Recommendation**: Create a dedicated folder (e.g. "Contact Form Uploads") and select it in the plugin settings to keep your media library organised.

---

## Form Builder Integration

### Requirements

- Shopware plan Rise, Evolve, or Beyond
- CMS Extensions plugin from Shopware

### What It Does

When using Shopware's Form Builder, two additional field types become available in the form field list:
- **File Upload** (single file)
- **File Upload (Multiple)**

These fields can be used in any Shopping Experiences form.

### Adding an Upload Field

1. Navigate to: **Content → Shopping Experiences**
2. Open the desired Shopping Experience and edit it
3. Select the form builder block in the layout editor
4. Click **"Add field"** in the form editor
5. Select **"File Upload"** or **"File Upload (Multiple)"** as the field type
6. Enter a field label (e.g. "Attachment" or "Technical Drawing")
7. Save changes and publish the Shopping Experience

**Result**: The upload field is available in the custom form.

---

## Troubleshooting

### Upload field does not appear in the contact form

**Symptom**: The upload field is not visible in the storefront.

**Possible causes and solutions**:
1. Plugin not activated → Check under **Extensions → My Extensions**
2. "Enable file upload for standard contact form" is disabled → Enable it in the plugin settings
3. Theme cache not cleared → **Settings → System → Caches** → Clear all caches

---

### Error: File type not allowed

**Symptom**: Customers see an error message when uploading a specific file.

**Cause**: The file extension is not in the allowed extensions list.

**Solution**: Add the desired extension to the plugin settings under **Allowed file extensions** (e.g. add `dwg` for CAD files).

---

### Error: File too large

**Symptom**: Customers see a message that the file is too large.

**Cause**: The total size of the uploaded files exceeds the configured limit.

**Solution**:
1. Increase the maximum file size in the plugin settings
2. Ensure the server's PHP settings (`upload_max_filesize`, `post_max_size`) are also large enough

---

### Attachments missing from the contact form email

**Symptom**: Files are uploaded but do not appear as attachments in the email.

**Solution**:
1. Check whether the selected target folder still exists in the media library
2. Check the server's PHP error log
3. Verify that email sending works generally (test without attachments)

---

## Related Documentation

- [Configuration Settings](../configuration/settings.md)
- [How-To Guide](../how_to.md)
