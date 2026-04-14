<%
if(session.getAttribute("user") == null){
    response.sendRedirect("index.jsp");
}
%>

<html>
<head>
<title>Delete</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="container mt-5">

<h3>Delete Student</h3>

<form action="student" method="post">
<input type="hidden" name="action" value="delete">

<input class="form-control mb-2" name="id" placeholder="ID" required>

<button class="btn btn-danger">Delete</button>
</form>

<a href="index.jsp">Back</a>

</body>
</html>