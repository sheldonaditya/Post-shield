const disagreedRedirectLink = "https://www.sheldonaditya.com"; // <= URL to show when the visitor is likely to be under 18yrs

Disclaimer.generateDialog();

const oDisclaimer = new Disclaimer();
if (!oDisclaimer.isAccepted()) {
    oDisclaimer.loadDialog();
    oDisclaimer.centerDialog();
}

document.getElementById('agree-over18').onclick = function () {
    oDisclaimer.disableDialog();
    oDisclaimer.setAccepted();
};

document.getElementById('disagree-under18').onclick = function () {
    location.href = disagreedRedirectLink
}
