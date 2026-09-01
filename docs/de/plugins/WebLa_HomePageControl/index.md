# Startseiten Steuerung

> Erlebniswelten als Startseite ausspielen — zeitgesteuert und abhängig davon, wer gerade im Shop ist.

## Übersicht

Ihr Shop hat genau eine Startseite, die im Verkaufskanal hinterlegt ist. Mit diesem Plugin bestimmen Sie stattdessen über Regeln, welche Erlebniswelt Ihre Besucher als Startseite sehen — abhängig von Datum, Uhrzeit, Wochentag, Kundengruppe und davon, ob jemand eingeloggt ist.

Sie legen dafür beliebig viele Konfigurationen an. Jede Konfiguration verbindet eine Erlebniswelt mit einer Menge von Regeln. Trifft eine Konfiguration auf den aktuellen Besucher zu, wird ihre Erlebniswelt als Startseite ausgespielt. Trifft keine zu, bleibt die im Verkaufskanal hinterlegte Startseite stehen — es gibt also keinen Zustand, in dem Ihr Shop ohne Startseite dasteht.

Typische Einsätze: Weihnachts- oder Oster-Landingpage, die sich am Stichtag von selbst einschaltet und danach wieder verschwindet. Black-Week-Aktion, die nur an bestimmten Tagen läuft. Eine eigene Startseite für Ihre B2B-Kundengruppe. Eine Willkommensseite für Gäste und eine andere für eingeloggte Kunden. Sie müssen dafür weder Templates anfassen noch nachts am Rechner sitzen.

## Hauptfunktionen

- **Zeitsteuerung**: Konfigurationen schalten sich automatisch zu einem Datum und einer Uhrzeit ein und wieder aus
- **Wiederkehrende Regeln**: Tageszeit und Wochentage lassen sich unabhängig vom Datum steuern
- **Zielgruppen**: eigene Startseite je Kundengruppe, für Gäste oder für eingeloggte Kunden
- **Regeln kombinierbar**: mehrere Regeln je Konfiguration, verknüpft mit **UND** oder **ODER**
- **Priorität**: bei mehreren zutreffenden Konfigurationen gewinnt die mit dem höchsten Wert
- **Verkaufskanal-genau**: jede Konfiguration gilt für einen bestimmten Verkaufskanal oder für alle
- **Cache-sicher**: das Plugin arbeitet auch bei aktivem HTTP-Cache korrekt und leert den Cache selbst, wenn ein Zeitfenster beginnt oder endet

## Voraussetzungen

- Shopware ab Version 6.6.6.0 bis einschließlich 6.7.x
- Mindestens eine angelegte Erlebniswelt vom Typ Startseite
- Der geplante Task (Scheduled Task) und der Message Queue Consumer Ihres Shops müssen laufen — sonst greifen zeitgesteuerte Wechsel bei aktivem Cache verzögert

## Kompatibilität

Dieses Plugin unterstützt beide aktuellen Shopware-Hauptversionen aus einem Download:

| Shopware-Version | Status         | Hinweise                                                          |
| ---------------- | -------------- | ----------------------------------------------------------------- |
| 6.6.6 und neuer  | ✅ Unterstützt | 6.6.6 ist die Mindestversion, ältere 6.6-Patchstände fehlen die nötigen Cache-Funktionen |
| 6.7.x            | ✅ Unterstützt | —                                                                 |
| 6.5.x            | ❌             | Nutzen Sie Plugin-Version 2.x                                     |

## Schnellstart

1. Plugin über **Erweiterungen → Meine Erweiterungen** installieren und aktivieren
2. Eine Erlebniswelt vorbereiten unter **Inhalte → Erlebniswelten** (Typ: Startseite)
3. Zu **Marketing → Startseiten Steuerung** wechseln und **Konfiguration hinzufügen** klicken
4. Name, Priorität, Erlebniswelt und Regel-Operator setzen, dann **Speichern**
5. Nach dem Speichern im Bereich **Regeln** die gewünschten Regeln anlegen

Eine ausführliche Anleitung finden Sie unter [Anleitungen](how_to.md).

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) — alle Felder einer Konfiguration erklärt
- [Nutzungsanleitung](usage/usage.md) — alle Regeltypen und ihr Verhalten
- [Anleitungen](how_to.md) — Schritt-für-Schritt-Workflows für typische Aktionen
- [Änderungsprotokoll](changelog.md) — Versionshistorie

## Support

- Hersteller und Support: https://store.shopware.com/web-labels-webdesign-gmbh.html
- Dokumentation: https://docs.web-labels.de
