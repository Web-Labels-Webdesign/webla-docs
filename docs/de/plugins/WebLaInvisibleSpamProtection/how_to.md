# Anleitungen

## Den Schutz sicher einführen

1. Öffnen Sie **Erweiterungen → Meine Erweiterungen → Spam Schutz Easy Mode → Konfigurieren**.
2. Aktivieren Sie unter **Allgemein** den **Testmodus** und speichern Sie.
3. Beobachten Sie einige Tage lang die Dashboard-Karte. Unter **nur protokolliert** sehen Sie, welche Regeln auslösen würden.
4. Deaktivieren Sie den **Testmodus**.

## IP-Limits wirksam schalten

In der Standardeinstellung protokollieren die IP-Limits nur.

1. Öffnen Sie den Bereich des gewünschten Formulars, zum Beispiel **Kundenregistrierung**.
2. Stellen Sie **Reaktion bei überschrittenem Versuchslimit** und **Reaktion bei überschrittenem Erfolgslimit** auf **Silent Drop** oder **Blockieren**.
3. Speichern Sie.

Kunden hinter derselben IP-Adresse, etwa in einem Firmennetz, teilen sich das Limit. Tragen Sie solche Adressen unter **Freigegebene IPs / IP-Bereiche** ein.

## Spam mit fremder Schrift stoppen

1. Wählen Sie unter **Zeichen- und Schriftfilter** die **Gesperrten Schriftsysteme**.
2. Wählen Sie unter **Geprüfte Felder** die Felder, die geprüft werden sollen.
3. Stellen Sie die **Reaktion** pro Formular ein und speichern Sie.

Beim Kontaktformular steht die Reaktion standardmäßig auf **Nur protokollieren**. Sperren Sie Schriftsysteme nur, wenn Sie keine Kunden haben, die sie verwenden.

## E-Mail-Domains sperren

1. Tragen Sie unter **E-Mail-Filter** Endungen wie `.xyz` oder einzelne Domains ein, jeweils eine pro Zeile.
2. Tragen Sie Ausnahmen unter **Allgemein → Freigegebene E-Mail-Domains** ein.
3. Speichern Sie.

## Die Browser-Prüfung wirksam schalten

In der Standardeinstellung protokolliert die Browser-Prüfung nur.

1. Prüfen Sie auf der Dashboard-Karte, wie viele Treffer die Browser-Prüfung hat.
2. Stellen Sie die Reaktionen unter **Browser-Prüfung** pro Formular auf **Silent Drop** oder **Blockieren**.
3. Speichern Sie.

Besucher ohne JavaScript bestehen die Browser-Prüfung nicht.

## Wenn ein echter Kunde blockiert wird

1. Prüfen Sie auf der Dashboard-Karte, welche Regel auslöst.
2. Hinterlegen Sie eine Freigabe für die IP-Adresse oder die E-Mail-Adresse, oder stellen Sie die Regel auf **Nur protokollieren**.

Freigaben gelten nur für die IP-Limits oder die E-Mail-Sperren, nicht für die übrigen Inhaltsregeln.
