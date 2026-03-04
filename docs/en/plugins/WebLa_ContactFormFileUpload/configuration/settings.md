# Configuration Settings

This document describes all available settings for the "Contact Form – File Upload" plugin.

**Navigation**: Extensions → My Extensions → Contact form - File upload → Configure

All settings can be configured globally or per sales channel. Use the sales channel dropdown at the top of the configuration page to select the scope.

---

## Contact Form – File Upload Configuration

### Enable file upload for standard contact form

| Property     | Value         |
| ------------ | ------------- |
| **Type**     | Switch        |
| **Default**  | Enabled       |
| **Required** | No            |

**Description**: Enables or disables the upload field in Shopware's standard contact form. When disabled, the contact form behaves as usual without an upload option.

**Example Use Case**: Disable this option if you only want to use the upload field in the Form Builder (CMS Extensions) but not in the standard contact form.

---

### Allowed file extensions

| Property     | Value                                  |
| ------------ | -------------------------------------- |
| **Type**     | Text field                             |
| **Default**  | `gif,png,jpg,jpeg,pdf`                 |
| **Required** | Yes                                    |

**Description**: Comma-separated list of file extensions that customers are allowed to upload. The plugin fully supports all extensions entered here — including formats not part of Shopware's default media library, such as CAD formats (DWG, DXF) or other industry-specific file types.

Case is ignored: `dwg` and `DWG` are both accepted.

**Examples**:
- Standard formats: `gif,png,jpg,jpeg,pdf`
- Including CAD files: `jpg,jpeg,png,pdf,dwg,dxf`
- Extended: `jpg,jpeg,png,gif,pdf,doc,docx,dwg,dxf,zip`

**Example Use Case**: A metalwork company enters `jpg,pdf,dwg,dxf,step` so customers can submit technical drawings directly through the contact form.

---

### Max. filesize in MB

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Number  |
| **Default**  | `20`    |
| **Unit**     | MB      |
| **Required** | Yes     |

**Description**: Sets the maximum allowed total size of all uploaded files in megabytes. With multiple upload enabled, this value applies to the **combined total** of all files, not per individual file.

**Example Use Case**: With a limit of `20` and multiple upload enabled, customers can upload 4 files at 5 MB each, or 1 file at 20 MB — but not 3 files at 10 MB each (30 MB > 20 MB).

> **Note**: Make sure this value is compatible with your server's PHP settings (`upload_max_filesize`, `post_max_size`).

---

### Upload type

| Property     | Value                    |
| ------------ | ------------------------ |
| **Type**     | Select                   |
| **Default**  | Multi-File Upload        |
| **Required** | Yes                      |

**Description**: Determines whether customers can select one or multiple files in the file selection dialog.

**Options**:
- `Single file Upload`: Customers can select only one file at a time via the file dialog
- `Multi-File Upload`: Customers can select multiple files at once in the file dialog (Ctrl+Click / Shift+Click)

> **Note**: Via drag & drop, customers can **always** upload multiple files regardless of this setting. The upload type setting only applies to the classic file dialog (click to browse).

**Example Use Case**: Choose "Single file Upload" for simple requests (e.g. receipt photos), or "Multi-File Upload" when customers frequently need to send multiple documents (e.g. multi-page plans).

---

### Choose the folder where uploaded files should be saved

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Folder select   |
| **Default**  | None (empty)    |
| **Required** | Recommended     |

**Description**: Select the folder in Shopware's media library where files uploaded via the contact form will be stored. If no folder is selected, files are placed in the root of the media library.

**Example Use Case**: Create a dedicated folder (e.g. "Customer Uploads" or "Contact Form") in the media library beforehand and select it here to keep uploads organised.

---

## Sales Channel Specific Settings

All settings above can be configured per sales channel independently.

| Setting                  | Scope                      | Typical Use Case                                               |
| ------------------------ | -------------------------- | -------------------------------------------------------------- |
| Enable upload            | Global/Per Sales Channel   | Enable upload only in specific shops                           |
| Allowed file extensions  | Global/Per Sales Channel   | B2B shop allows DWG/DXF, B2C shop only JPG/PDF                |
| Maximum file size        | Global/Per Sales Channel   | Higher limit for a trade/specialist shop                       |
| Upload type              | Global/Per Sales Channel   | Multiple upload only in B2B area                               |
| Target folder            | Global/Per Sales Channel   | Separate folders per sales channel for better organisation     |

---

## Recommended Configurations

### For general online shops (B2C)

| Setting                 | Recommended Value          |
| ----------------------- | -------------------------- |
| Enable upload           | Enabled                    |
| Allowed file extensions | `jpg,jpeg,png,gif,pdf`     |
| Maximum file size       | `10`                       |
| Upload type             | Multi-File Upload          |

### For technical shops or B2B with CAD files

| Setting                 | Recommended Value                    |
| ----------------------- | ------------------------------------ |
| Enable upload           | Enabled                              |
| Allowed file extensions | `jpg,jpeg,png,pdf,dwg,dxf,step,stp`  |
| Maximum file size       | `50`                                 |
| Upload type             | Multi-File Upload                    |
