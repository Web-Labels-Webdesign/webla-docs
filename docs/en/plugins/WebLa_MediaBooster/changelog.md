# Changelog

All notable changes to Media Booster for end users.

---

## [1.3.6] - 2026-03-20

### Bug Fixes
- Fixed non-transparent PNGs (e.g. technical drawings) being corrupted during WebP/AVIF conversion — alpha channel was incorrectly activated on RGB images, making output nearly invisible

---

## [1.3.5] - 2026-03-06

### Bug Fixes
- Fixed admin dashboard progress not updating in real-time during processing — switched to direct SQL reads for consistency with background worker writes and added cache-busting to status polling
- Fixed "Last Run" timestamp showing stale or missing values after starting a new processing run

---

## [1.3.4] - 2026-03-06

### Bug Fixes
- Fixed sparse images (technical drawings, diagrams) being destroyed by lossy AVIF/WebP compression — now uses lossless mode which is both smaller and pixel-perfect
- Removed unused `media_version_id` column from log table (media entity has no versioning)

---

## [1.3.3] - 2026-03-06

### Bug Fixes
- Fixed "Convert All Again" not regenerating AVIF/WebP files — conversion was skipped when the target file already existed on disk, so redo operations had no effect

---

## [1.3.2] - 2026-03-06

### Bug Fixes
- Fixed queue messages being processed synchronously in the HTTP request instead of in the background — admin UI no longer blocks until all batches complete

---

## [1.3.1] - 2026-03-06

### Bug Fixes
- Fixed reset task endpoint not dispatching batches after resetting, leaving processing stuck
- Fixed footer buttons overflowing and reset being blocked after a completed run
- Renamed buttons for clarity and added confirmations for destructive actions

---

## [1.3.0] - 2026-03-06

### Improvements
- Replaced fragile chain-dispatch queue architecture with pre-dispatch — all media IDs are now queried upfront, split into batches, and dispatched at once so each batch is independent and the queue can no longer stall mid-run
- Processing progress is now tracked at batch level instead of per-item, reducing database writes during processing
- Running state auto-clears when all items are handled, and stuck-state timeout reduced from 30 to 10 minutes for faster recovery

### Bug Fixes
- Fixed potential queue stall where a single failed batch could stop all subsequent batches from processing

---

## [1.2.1] - 2026-03-06

### Bug Fixes
- Fixed admin dashboard crash ("createNotificationError is not a function") caused by missing notification mixin
- Improved progress card footer button layout — actions are now grouped logically with proper spacing

---

## [1.2.0] - 2026-03-05

### New Features
- Added configurable frontend extension priority setting — choose whether AVIF, WebP, or original format is served to visitors
- Processing errors are now persisted to the database and survive across queue worker restarts, making them reliably visible in the admin dashboard
- Renamed Twig filter from `webla_as_webp` to `webla_as_converted` to reflect AVIF/WebP support

### Bug Fixes
- Fixed extension priority setting not working due to missing SystemConfigService injection
- Fixed error timestamps not displaying in admin dashboard (key mismatch between storage and template)
- Fixed various pipeline issues: infinite loops, race conditions, query performance, data safety, UI polish, deduplication, UTF-8 safety, and dead code cleanup

### Improvements
- Reduced database queries during batch processing by ~80% — progress counts are now accumulated in memory and flushed once per batch instead of per item

---

## [1.1.1] - 2026-03-05

### New Features
- Sparse images (diagrams, technical drawings, line art) are now automatically detected and converted at higher quality (minimum 95) to preserve thin lines and text
- Added per-task "Redo" buttons in admin dashboard — reset and reprocess just Resize, Convert, or SEO individually without clearing all data

### Bug Fixes
- Fixed AVIF/WebP conversion destroying thin lines on technical drawings and diagrams due to aggressive lossy compression at moderate quality settings

---

## [1.1.0] - 2026-03-05

### New Features
- Error notifications in admin dashboard now show as user-facing alerts instead of silent console errors

### Bug Fixes
- Fixed out-of-memory crash (2GB limit) on large media libraries by clearing Doctrine's entity manager between batches
- Fixed entire processing run aborting when a single batch fails (e.g., due to special characters in filenames) — failed batches are now skipped and processing continues
- Fixed total media count query triggering Flysystem path validation on media with special characters

### Improvements
- Shopware Context is now properly passed through the entire service call chain instead of creating default contexts
- Processing automatically stops after 3 consecutive batch failures to prevent infinite loops

---

## [1.0.8] - 2026-03-05

### Fixed
- Fixed processing crash when media filenames contain special Unicode characters (soft hyphens, non-breaking spaces) that Flysystem rejects during entity loading — affected items are now skipped and marked as failed

---

## [1.0.7] - 2026-03-05

### Fixed
- Fixed batch processing getting permanently stuck when a single image fails (corrupted file, unsupported format) — failed items are now logged and skipped instead of causing infinite retry loops
- Fixed misleading progress display showing "32 / 3468 (41.5%)" — now shows handled/total with breakdown of processed, skipped, and failed items

---

## [1.0.6] - 2026-03-05

### Fixed
- Fixed SQL syntax error on MariaDB when fetching unprocessed media IDs (LIMIT parameter was quoted as string)

---

## [1.0.5] - 2026-03-05

### Fixed
- Fixed 500 error on status API caused by missing DBAL Connection dependency in ProgressService

---

## [1.0.4] - 2026-03-05

### Fixed
- Fixed memory exhaustion on large media libraries by replacing PHP-loaded ID lists with SQL subqueries
- Fixed memory accumulation in long-running worker by replacing entity search+write with DBAL UPSERT
- Fixed memory pressure from batch processing by explicitly releasing entities and forcing GC between batches
- Fixed Imagick pixel cache memory leak by calling clear() before destroy() on instances
- Fixed infinite processing loop when media files are missing from disk (now logged as skipped)
- Fixed infinite partial batches when lock failures were not counted toward batch size
- Fixed slow status API polling by using SQL aggregation instead of loading all log entries
- Fixed stuck processing state by auto-clearing isRunning state after 30 minutes
- Fixed counter corruption from concurrent run requests (now rejected with 409)
- Fixed incorrect AVIF convert total count due to wrong extension list
- Fixed premature polling stop due to race condition in runTask()
- Fixed repeated processing of already-converted files (now logged to exclude from future runs)
- Fixed repeated processing of within-bounds images during resize (now logged to exclude from future runs)
- Recent processing errors are now collected and surfaced in the status API response

---

## [1.0.3] - 2026-01-23

### Added
- **Automatic AVIF/WebP delivery**: Logos and theme images now automatically use converted versions without requiring template changes
- AVIF support in Twig filter with priority order: AVIF > WebP > Original
- Warning in server status when GD is used for AVIF conversion (recommends Imagick)

### Fixed
- Fixed progress counters resetting on every batch instead of only at run start
- Fixed total counts changing mid-run when new media is uploaded
- Fixed PHP timeout during AVIF conversion with GD library on large images (>4 megapixels now skipped)

### Changed
- Dashboard labels now clearly distinguish "All-Time Statistics" from "Current Run Progress"
- Twig filter now checks for AVIF first, then WebP, for optimal compression

---

## [1.0.2] - 2026-01-23

### Fixed
- Fixed "Palette image not supported by webp" error when converting PNG images with indexed colors (logos, icons, simple graphics)
- Fixed GIF to WebP/AVIF conversion (GIF images are always palette-based)
- Fixed progress percentage showing >100% when running conversion multiple times
- Fixed progress not updating when all images are already converted (skipped)
- Improved alpha channel handling for transparent PNG images

### Added
- Display failed image count in admin dashboard progress section
- Error message when resize is started without max dimensions configured

### Changed
- Progress counters now reset when starting a new processing run
- Enhanced error messages for conversion failures now include the actual warning

---

## [1.0.1] - 2026-01-23

### Documentation
- Added README with installation and usage instructions
- Added user documentation (EN/DE)

---

## [1.0.0] - 2026-01-23

### Initial Release

**Image Optimization**
- Automatic resizing of oversized original images to configurable maximum dimensions
- Flexible resize modes: "Fit" (within both bounds) or "Largest" (limit largest side only)
- Supports JPG, JPEG, PNG, BMP, and GIF formats

**Modern Format Conversion**
- Convert images to WebP for up to 30% smaller file sizes
- Convert images to AVIF for up to 50% smaller file sizes
- Original files preserved for full Shopware compatibility
- Automatic thumbnail conversion included
- Configurable quality settings for images and thumbnails separately

**SEO Optimization**
- Automatic alt text generation for product and content images
- Automatic title attribute optimization
- SEO-friendly filename generation with multiple templates
- Support for product name, shop name, product number, and manufacturer number
- Multi-language support

**Administration Dashboard**
- Real-time progress tracking with percentage and processed images
- Batch processing with configurable batch size
- Start/stop processing controls
- Detailed statistics and error logging
- Server capability detection (Imagick/GD, WebP/AVIF support)

**Technical Features**
- Shopware 6.5, 6.6, and 6.7 compatibility
- Scheduled task support for automatic background processing
- Message queue integration for async processing
- Twig filter for WebP image delivery in storefront
- Automatic cleanup of WebP/AVIF files when media is deleted

---

## Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 1.0.x          | 6.5.0 - 6.7.x    | 8.1+        |
