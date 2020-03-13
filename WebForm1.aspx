<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="mineSweeper.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" type="text/css" href="StyleSheet1.css" />
    <script src="mainJs.js"></script>
    <title>MineSweeper</title>
</head>
<body>
    <h1>MineSweeper</h1>
    <br />
    
<table id="grid">

</table>
    <br />
<%--<button id="playAgain" style="display:none;" onclick="difficulty()"> play again</button>--%>
<button id ="easy" onclick="difficulty('ez')" >easy</button>
<button id ="medium" onclick="difficulty('mid')">medium</button>
 <button id ="hard" onclick="difficulty('hard')">hard</button>
    
</body>
</html>
