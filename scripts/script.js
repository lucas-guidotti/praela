
function agendarDate() {
    const dateOption = document.getElementById('date-options').value;
    const eventDate = '20240907T230000Z'; // Data e hora no formato YYYYMMDDTHHMMSSZ (Z = UTC)
    const eventEndDate = '20240907T235900Z'; // Ajuste a data final conforme necessário

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${dateOption}
DTSTART:${eventDate}
DTEND:${eventEndDate}
LOCATION:Ao lado do Lucas
DESCRIPTION:Um momento especial com você.
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'convite_date.ics';
    a.click();
    URL.revokeObjectURL(url);
}