# Changelog

All notable changes to the "Contact Form – File Upload" plugin for end users.

---

## [5.0.6] – 2026-04-20

### 🐛 Bug Fixes

- **Shopware 6.7.9.0 compatibility**: Fixed an error on storefronts running Shopware 6.7.9.0 where the new revocation request form caused a "controller is not callable" exception. The plugin now forwards revocation requests to Shopware's built-in handler while remaining compatible with older Shopware versions.

---

## [5.0.5] – 2026-03-04

### 🐛 Bug Fixes

- **Any file type support**: DWG, DXF, and other non-standard file formats can now be uploaded successfully. Previously, uploads failed with a "file extension not supported" error even when the extension was listed in the plugin settings. The plugin now automatically extends Shopware's file type whitelist with all configured extensions.

---

## [5.0.4] – 2026-01-06

### 🔧 Improvements

- **Internal optimisations**: Plugin directory structure cleaned up and configuration for Shopware Store and build process improved.

---

## [5.0.3] – 2026-01-06

### 🐛 Bug Fixes

- **Configuration**: Service definitions refined to prevent potential conflicts with other plugins.

---

## [5.0.2] – 2026-01-06

### ✨ New Features

- **Improved upload component**: The upload field now displays selected files as a preview with file names and validates files before the form is submitted.

### 🐛 Bug Fixes

- **Configuration**: Missing configuration section added to the plugin description.

---

## [2.0.0] – 2023-06-07

### ✨ New Features

- **Shopware 6.5 support**: The plugin now supports Shopware 6.5.
- **Remove file**: Customers can remove selected files before submitting the form.

---

## [1.0.7] – 2023-03-06

### 🐛 Bug Fixes

- **Size limit**: The configured file size limit is now enforced correctly.

---

## [1.0.6] – 2023-02-27

### ✨ New Features

- **Size limit**: New setting to limit the maximum upload file size.

---

## [1.0.5] – 2023-02-27

### ✨ New Features

- **Multiple upload**: Customers can now upload multiple files at once.

### 🐛 Bug Fixes

- Compatibility issue with Shopware versions below 6.4.10 resolved.

---

## [1.0.1] – 2022-10-30

### ✨ New Features

- **Translations**: Plugin texts are now available in German and English.
- **Folder selection**: Target folder for uploaded files can be selected in the media library.

---

## [1.0.0] – 2022-10-30

### 🎉 Initial Release

- File upload in the contact form
- Basic configuration (allowed file types, size limit)

---

## Version History Summary

| Version | Release Date | Highlights                                              |
| ------- | ------------ | ------------------------------------------------------- |
| 5.0.5   | 2026-03-04   | Upload of DWG, DXF, and any custom file type            |
| 5.0.2   | 2026-01-06   | Improved upload component with file preview             |
| 2.0.0   | 2023-06-07   | Shopware 6.5 support, remove file button                |
| 1.0.6   | 2023-02-27   | Configurable file size limit                            |
| 1.0.5   | 2023-02-27   | Multiple upload                                         |
| 1.0.0   | 2022-10-30   | Initial release                                         |

---

## Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 5.0.x          | 6.6.x, 6.7.x     | 8.1+        |
| 2.0.x          | 6.5.x            | 8.0+        |
| 1.x            | 6.4.x            | 8.0+        |
