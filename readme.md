# MetaGer

MetaGer ist eine datenschutzfreundliche und freie Meta-Suchmaschine.

## Live-Version
Hinweis: Diese Open-Source Version von MetaGer ist noch nicht bereit, auf unserem Live-Server (https://metager.de) verwendet zu werden.
Während wir daran arbeiten sie soweit fertig zu stellen, dass alles exakt so funktioniert, wie in der Live-Version auch, sorgt
ein Mechanismus für den automatischen Deploy dafür, dass zu jedem beliebigen Zeitpunkt der Master-Branch in seiner aktuellen Version
über die Adresse https://metager3.de ( Entwicklungsserver ) erreichbar ist.

## MetaGer zu langsam?
Damit MetaGer so schnell wird, wie auf unserem Live-Server, erfordert es ein wenig Konfigurationsarbeit. Der Grund, warum die Version nach dem Checkout langsamer als normal ist, ist der, dass die eingestellten Suchmaschinen im Standard synchron abgefragt werden.
Das heißt, dass bei einer Suche mit 20 Suchmaschinen eine  Suchmaschine nach der anderen abgefragt wird.
Die parallele abarbeitung kann mit Hilfe von Laravels Queue-System ( https://laravel.com/docs/5.2/queues ) hergestellt werden.
Im Standard, ist in der Datei ".env" QUEUE_DRIVER=sync gesetzt.
Wir verwenden auf unseren Servern den QUEUE_DRIVER=redis und haben mit Hilfe von Supervisor ( https://laravel.com/docs/5.2/queues#supervisor-configuration ) eine Menge queue:worker Prozesse am laufen, die für eine parallele bearbeitung sorgen.

## Offizielle Dokumentation

Die Dokumentation ist im Wiki des Gitlab-Projektes zu finden.

## Beiträge

Vielen Dank, dass du erwägst, zu MetaGer beizutragen!
Leider sind wir noch nicht bereit, Änderungen von außen aufzunehmen.
Es steht dir jedoch frei, ein Ticket zu eröffnen.

## Sicherheitslücken

Falls du eine Sicherheitslücke findest oder dir etwas unsicher vorkommt,
zögere biite nicht ein Ticket zu schreiben oder eine Mail an [office@suma-ev.de](mailto:office@suma-ev.de) zu senden.

## Lizenzen

Der MetaGer-eigene Code, sofern nicht anders anders angegeben, steht unter der [AGPL-Lizenz Version 3](https://www.gnu.org/licenses/agpl-3.0).

Eine Liste der Projekte, auf denen MetaGer basiert, und deren Lizenzen sind in der Datei LICENSES.md zu finden. 