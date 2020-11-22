let getNewServerName = function () {
    let serverNumber = (document.getElementById('servers').childElementCount + 1).toString();
    let serverProps = ['server', 'host', 'port'];
    return [serverProps[0].toString().concat(serverNumber), serverProps[1].toString().concat(serverNumber), serverProps[2].toString().concat(serverNumber)];
}

function getServerAt(serverNumber) {
    if (serverNumber < 1) {
        console.error('No server has number: ' + serverNumber);
    } else if (serverNumber > window.serverCount) {
        console.error('No server has number: ' + serverNumber);
    } else {
        let serverHost = document.getElementById('host'.concat(serverNumber.toString())).value;
        let serverPort = document.getElementById('port'.concat(serverNumber.toString())).value;
        return [serverHost, serverPort, 'server'.concat(serverNumber.toString())];
    }
}

function addServerInput(amount) {
    for (let i = 0; i < amount; i++) {
        const serverList = document.getElementById("servers");
        let newServer = document.createElement("nav");
        newServer.innerHTML = '<div class="ui inverted divider" id="' + getNewServerName()[0] + "_Divider" + '"></div>' +
            '<div name="' + getNewServerName()[0] + '"  id="' + getNewServerName()[0] + '" class="two fields">' +
            '<label for="' + getNewServerName()[1] + '"></label>' +
            '                    <input name="' + getNewServerName()[1] + '" id="' + getNewServerName()[1] + '" type="text"' +
            '                           class="field" placeholder="IP Address / Hostname" required="required">' +
            '<label for="' + getNewServerName()[2] + '"></label>' +
            '                    <input name="' + getNewServerName()[2] + '" id="' + getNewServerName()[2] + '" type="number" minlength="1" maxlength="5" min="1"' +
            '                           pattern="^([1-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$"\n' +
            '                           class="field" placeholder="Port #" required="required" value="25565">' +
            '                </div>'
        serverList.appendChild(newServer);
        updateServerList();
    }
}

function removeServerInput(amount) {
    for (let i = 0; i < amount; i++) {
        const servers = document.getElementById("servers");
        if (servers.childElementCount > 1) {
            servers.removeChild(servers.lastElementChild);
            updateServerList();
        } else {
            break;
        }
    }
}

function toggleRemoveButton(isDisabled) {
    const removeButton = document.getElementById("removeServerInput");
    removeButton.disabled = isDisabled;
}

function updateServerList() {
    window.serverCount = document.getElementById('servers').childElementCount.toString();
    window.serverCount <= 1 ? document.getElementById("removeServerInput").disabled = true : document.getElementById("removeServerInput").disabled = false;
}

function setServerCookies() {
    updateServerList();
    for (let i = 0; i < window.serverCount; i++) {
        setCookie(getServerAt(i + 1)[2], getServerAt(i + 1)[0] + ':' + getServerAt(i + 1)[1], 1)
    }
}

function getServerCookies() {
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    addServerInput(ca.length - 1);
    for (let i = 1; i <= ca.length; i++) {
        if (document.cookie.split(';').some((item) => item.trim().startsWith('server'.concat(i.toString()) + '='))) {
            document.getElementById('host'.concat(i.toString())).value = getCookie('server'.concat(i.toString()))[0];
            document.getElementById('port'.concat(i.toString())).value = getCookie('server'.concat(i.toString()))[1];
        }
    }
}

function resetCookies() {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++)
        eraseCookie(cookies[i].split("=")[0]);
    location.reload();
}

function eraseCookie(name) {
    setCookie(name, "", -1);
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            c = c.substring(name.length, c.length);
            let cs = c.split(':');
            return [cs[0], cs[1]];
        }
    }
    return "";
}
