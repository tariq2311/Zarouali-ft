export default function DatenschutzPage() {
  return (
    <main className="min-h-screen pt-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl lg:text-5xl text-white mb-12 tracking-wide">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl font-medium text-white mb-3">
              Allgemeine Hinweise
            </h3>
            <p className="text-gray-300">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Verantwortliche Stelle
            </h2>
            <div className="text-gray-300 space-y-1 mb-4">
              <p className="font-semibold">Aziz Zarouali</p>
              <p>A.Zarouali Fertigungstechnik</p>
              <p>Nottebohmstraße 53</p>
              <p>58511 Lüdenscheid</p>
              <p>Telefon: 02351 / 6777 535</p>
              <p>Telefax: 02351 / 6777 537</p>
              <p>E-Mail: info@zarouali-ft.de</p>
            </div>
            <p className="text-gray-300">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl font-medium text-white mb-3">
              Kontaktformular
            </h3>
            <p className="text-gray-300 mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h4 className="text-lg font-medium text-white mb-2">
              Verwendung von Formspree
            </h4>
            <p className="text-gray-300 mb-4">
              Für die Verarbeitung des Kontaktformulars nutzen wir den Dienst{" "}
              <strong>Formspree</strong> (Formspree, Inc., USA). Wenn Sie das
              Kontaktformular ausfüllen und absenden, werden Ihre eingegebenen
              Daten (Name, E-Mail-Adresse, Telefonnummer, Nachricht) über die
              Server von Formspree an uns weitergeleitet. Formspree speichert
              diese Daten temporär, um die Zustellung zu gewährleisten.
            </p>
            <p className="text-gray-300 mb-4">
              Weitere Informationen zum Datenschutz bei Formspree finden Sie
              unter:{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-400 transition-colors"
              >
                https://formspree.io/legal/privacy-policy
              </a>
            </p>
            <p className="text-gray-300 mb-4">
              Die Nutzung von Formspree erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
              effizienten Bearbeitung von Kundenanfragen.
            </p>

            <h3 className="text-xl font-medium text-white mb-3">
              Server-Log-Dateien
            </h3>
            <p className="text-gray-300 mb-4">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-gray-300">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Ihre Rechte
            </h2>
            <p className="text-gray-300 mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
            <p className="text-gray-300">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Recht auf Auskunft, Löschung, Sperrung
            </h2>
            <p className="text-gray-300">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit unter der im Impressum angegebenen Adresse an uns
              wenden.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Widerspruch gegen Werbe-Mails
            </h2>
            <p className="text-gray-300">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung und Informationsmaterialien wird hiermit widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p className="text-gray-300">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die
              Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf
              &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="text-gray-300">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
              März 2026. Durch die Weiterentwicklung unserer Website oder
              aufgrund geänderter gesetzlicher beziehungsweise behördlicher
              Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu
              ändern.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
