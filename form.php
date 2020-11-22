<script src="js/serverList.js"></script>
<div class="center aligned four wide centered column" onload="updateServerList()">
    <form id="serverFormControl">
        <div class="ui fluid left icon action input">
            <i class="hashtag icon"></i>
            <label for="serverCountToAdd"></label>
            <input name="serverCountToAdd" id="serverCountToAdd" type="number" value="1" min="1" max="20" step="1">
            <button name="addServerInput" id="addServerInput" type="button"
                    onclick="window.addServerInput(document.getElementById('serverCountToAdd').value)"
                    class="ui green button">Add Servers
            </button>
            <button name="removeServerInput" id="removeServerInput" type="button"
                    onclick="window.removeServerInput(document.getElementById('serverCountToAdd').value)"
                    class="ui red button" disabled="disabled">Remove Servers
            </button>
            <button name="resetCookie" id="resetCookie" type="button"
                    class="ui orange button" onclick="resetCookies()">Reset
            </button>
        </div>
    </form>
    <div class="ui inverted divider"></div>
    <form id="serverForm" method="post" action="serverList.php" class="ui form" onsubmit="setServerCookies()">
        <div id="servers" name="servers" class="ui center aligned content">
            <nav>
                <div name="server1" id="server1" class="two fields">
                    <label for="host1"></label>
                    <input name="host1" id="host1" type="text" placeholder="IP Address / Hostname" required="required">
                    <label for="port1"></label>
                    <input name="port1" id="port1" type="number" minlength="1" maxlength="5" min="1"
                           max="65535"
                           pattern="^([1-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$"
                           class="field" placeholder="Port #" required="required" value="25565">
                </div>
            </nav>
        </div>
        <input name="submit" id="submit" type="submit"
               class="ui blue button" value="Submit">
    </form>
</div>

