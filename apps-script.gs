// Google Sheet -> Extensions -> Apps Script -> paste this -> Deploy -> New deployment
// Type: Web app | Execute as: Me | Who has access: Anyone
const NOTIFY = "sanjey0508@gmail.com";
const SHEET  = "Enquiries";

const safe = v => { v = String(v || "").slice(0, 3000); return /^[=+\-@]/.test(v) ? "'" + v : v; };

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET) || ss.insertSheet(SHEET);
    if (sh.getLastRow() === 0) sh.appendRow(["Time","Name","Email","Brand","Service","Budget","Deadline","Message","Status"]);
    sh.appendRow([new Date(), safe(d.name), safe(d.email), safe(d.brand), safe(d.service), safe(d.budget), safe(d.deadline), safe(d.message), "New"]);
    MailApp.sendEmail({
      to: NOTIFY,
      replyTo: d.email,
      subject: "New project enquiry: " + safe(d.service),
      body: ["Name: "+d.name,"Email: "+d.email,"Brand: "+d.brand,"Service: "+d.service,"Budget: "+d.budget,"Deadline: "+d.deadline,"","Message:",d.message].join("\n")
    });
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)})).setMimeType(ContentService.MimeType.JSON);
  }
}
