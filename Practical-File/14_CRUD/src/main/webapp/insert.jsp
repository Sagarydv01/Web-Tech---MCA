<%
if(session.getAttribute("user") == null){
    response.sendRedirect("index.jsp");
}
%>

<html>
<head>
<title>Insert</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="container mt-5">

<h3>Insert Student</h3>

<form action="student" method="post">
<input type="hidden" name="action" value="insert">

<input class="form-control mb-2" name="name" placeholder="Name" required>
<input class="form-control mb-2" name="email" placeholder="Email" required>
<input class="form-control mb-2" name="course" placeholder="Course" required>

<button class="btn btn-success">Insert</button>
</form>

<a href="index.jsp">Back</a>

</body>
</html>