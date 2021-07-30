//import statements
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import _ from "lodash";
import Table from "./Table";
import Pagination from "./Pagination";
import Searchbar from "./Searchbar";

const AdminPage = () => {
  //  
  const [users, setUsers] = useState([]);
  const [usersPerPage, setUsersPerPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    console.log(result);
    setUsers(result.data);
    setUsersPerPage(_(result.data).slice(0).take(pageSize).value());
  };

  const deleteHandler = (id) => {
    const newUsers = usersPerPage.filter((user) => user.id !== id);
    setUsersPerPage(newUsers);
  };

  const pageSize = 10;
  const noOfPages = users ? Math.ceil(users.length / pageSize) : 0;
  const pages = _.range(1, noOfPages + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const usersPerPage = _(users).slice(startIndex).take(pageSize).value();
    setUsersPerPage(usersPerPage);
  };

  

  return (
    <Container>
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table
        usersPerPage={usersPerPage}
        setUsersPerPage={setUsersPerPage}
        searchTerm={searchTerm}
        deleteHandler={deleteHandler}
      />
    
      <Pagination
        pages={pages}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </Container>
  );
};
export default AdminPage;
