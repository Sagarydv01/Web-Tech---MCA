<%@ page import="java.sql.*" %>
<%
String user = (String) session.getAttribute("user");

/* LOGIN */
if(request.getParameter("login") != null){
    if("admin".equals(request.getParameter("user")) &&
       "1234".equals(request.getParameter("pass"))){
        session.setAttribute("user","admin");
        user = "admin";
    } else {
        out.println("<h4 style='color:red'>Invalid Login</h4>");
    }
}

/* LOGOUT */
if(request.getParameter("logout") != null){
    session.invalidate();
    response.sendRedirect("index.jsp");
}
%>

<html>
<head>
<title>Dashboard</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">
<div class="container mt-5">

<%
if(user == null){
%>

<h3>Login</h3>
<form method="post">
<input class="form-control mb-2" name="user" placeholder="Username" required>
<input class="form-control mb-2" type="password" name="pass" placeholder="Password" required>
<button class="btn btn-primary" name="login">Login</button>
</form>

<%
} else {
%>

<h3>Dashboard</h3>

<a href="insert.jsp" class="btn btn-success">Insert</a>
<a href="update.jsp" class="btn btn-warning">Update</a>
<a href="delete.jsp" class="btn btn-danger">Delete</a>

<form method="post" style="display:inline;">
<button class="btn btn-secondary" name="logout">Logout</button>
</form>

<hr>

<table class="table table-bordered">
<tr><th>ID</th><th>Name</th><th>Email</th><th>Course</th></tr>

<%
try{
Class.forName("com.mysql.cj.jdbc.Driver");
Connection con = DriverManager.getConnection(
"jdbc:mysql://localhost:3306/webtech","root","admin");

Statement st = con.createStatement();
ResultSet rs = st.executeQuery("SELECT * FROM students");

while(rs.next()){
%>
<tr>
<td><%= rs.getInt(1) %></td>
<td><%= rs.getString(2) %></td>
<td><%= rs.getString(3) %></td>
<td><%= rs.getString(4) %></td>
</tr>
<%
}
con.close();
}catch(Exception e){
out.println(e);
}
%>

</table>

<%
}
%>

</div>
</body>
</html>