# Changelog

All notable changes to UTM Source - Marketing Parameter for end users.

---

## [5.0.0] - 2026-02-02

### New Features

- **Unified Branch Structure**: Migration to a simplified code structure for better maintainability
- **UTM Handler Core Functionality**: Complete session management and automatic cleanup tasks

### Improvements

- **Plug-and-Play JavaScript**: Improved JS compatibility across Shopware 6.5, 6.6, and 6.7
- **Security Improvements**: Fixed critical security and stability issues

---

## [4.0.1] - 2025-08-04

### Bug Fixes

- **Session Management**: Improvements to session management and cleanup task

---

## [4.0.0] - 2025-07-21

### Important Changes

- **Shopware 6.7 Support**: Full compatibility with Shopware 6.7

---

## [3.0.2] - Previous Version

### Changes

- **Shopware 6.6 Support**: Legacy branch for Shopware 6.6

---

## [2.0.1] - 2023-08-01

### Bug Fixes

- **Null Values**: Prevented saving of "null" values in the database

---

## [2.0.0] - 2023-06-09

### New Features

- **Shopware 6.5 Support**: Added compatibility with Shopware 6.5

---

## [1.1.30] - 2023-02-14

### Changes

- **Cookie Validity**: Increased cookie expiration to 30 days for better capture during longer purchase decisions

---

## [1.1.29] - 2022-11-24

### Bug Fixes

- **Duplicate Entries**: Fixed issue with duplicate database entries

---

## [1.1.28] - 2022-11-08

### Bug Fixes

- **Editing Issues**: Hotfix for problems when editing entries

---

## [1.1.27] - 2022-11-08

### Bug Fixes

- **Editing Issues**: Hotfix for problems when editing entries

---

## [1.1.26] - 2022-11-03

### Bug Fixes

- **String Comparison**: Hotfix for string comparison on save

---

## [1.1.25] - 2022-10-29

### Changes

- **Inheritance Order**: Changed order between order and UTM data

---

## [1.1.24] - 2022-10-15

### New Features

- **Device Detection**: Added capture of device type, browser, and operating system

---

## [1.1.22] - 2022-08-22

### Bug Fixes

- **Referrer on Login**: Fixed wrong referrer when user registers or logs in

---

## [1.1.21] - 2022-07-14

### New Features

- **Session Table**: New table for storing referrers without cookies
- **Scheduled Task**: Automatic cleanup of old entries in session table
- **Configuration Options**: Settings for session handling and cleanup interval

---

## [1.1.20] - 2022-07-13

### Changes

- **Template Inheritance**: Replaced 'extends' with 'sw_extends' for better Shopware compatibility

---

## [1.1.19] - 2022-06-22

### Initial Release

- Initial version of the plugin

---

## Version History Summary

| Version | Release Date | Highlights                                |
| ------- | ------------ | ----------------------------------------- |
| 5.0.0   | 2026-02-02   | Unified branch, SW 6.5-6.7 compatibility  |
| 4.0.1   | 2025-08-04   | Session management improved               |
| 4.0.0   | 2025-07-21   | Shopware 6.7 support                      |
| 3.0.2   | -            | Shopware 6.6 support                      |
| 2.0.0   | 2023-06-09   | Shopware 6.5 support                      |
| 1.1.24  | 2022-10-15   | Device detection added                    |
| 1.1.21  | 2022-07-14   | Cookie-less tracking introduced           |

---

## Upgrade Notes

### Upgrading to 5.0.0

This version unifies the codebase for all supported Shopware versions (6.5, 6.6, 6.7). A direct upgrade from previous versions is possible. After updating:

1. Clear cache
2. Review plugin settings
3. Perform a test order

### Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 5.0.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 4.0.x          | 6.7.x            | 8.1+        |
| 3.0.x          | 6.6.x            | 8.1+        |
| 2.0.x          | 6.5.x            | 8.1+        |
