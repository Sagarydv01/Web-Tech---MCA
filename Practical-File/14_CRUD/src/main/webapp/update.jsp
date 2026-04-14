<%
if(session.getAttribute("user") == null){
    response.sendRedirect("index.jsp");
}
%>

<html>
<head>
<title>Update</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="container mt-5">

<h3>Update Student</h3>

<form action="student" method="post">
<input type="hidden" name="action" value="update">

<input class="form-control mb-2" name="id" placeholder="ID" required>
<input class="form-control mb-2" name="name" placeholder="New Name" required>

<button class="btn btn-warning">Update</button>
</form>

<a href="index.jsp">Back</a>

</body>
</html>