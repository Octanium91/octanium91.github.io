var objConnection = new ActiveXObject("adodb.connection");   
    
function sql_connect(server, dbase, user, pass) {
    // подключение к sql
    var strConn = "driver={sql server};server="+server+";database="+dbase+";uid="+user+";password="+pass+"";
    objConnection.Open(strConn);

return objConnection

    //var rs = new ActiveXObject("ADODB.Recordset");
    //var strQuery = "SELECT * FROM  Person.Address";
    //rs.Open(strQuery, objConnection);
    //rs.MoveFirst();
    //while (!rs.EOF) {
    //    document.write(rs.fields(0) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    //    document.write(rs.fields(1) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    //    document.write(rs.fields(2) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ");
    //    document.write(rs.fields(3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ");
    //    document.write(rs.fields(4) + "<br/>");
    //    rs.movenext();
    //}
};

console.log("SQL connection...");
SQLConnect = sql_connect("sql2.freemysqlhosting.net", "sql2306826", "sql2306826", "jB7!nF3!");
var rs = new ActiveXObject("ADODB.Recordset");
rs.Open("SELECT * FROM GLOBAL_STATUS", SQLConnect);
rs.MoveFirst();
while (!rs.EOF) {
    console.log(rs.fields(0));
    rs.movenext();
}