import React from "react";
import Form from "../../layouts/Form/Form";
import TableUser from "../../layouts/Table/TableUser";
import SearchBar from "../../layouts/Search/SearchBar";

const HomePage = () => {
  return (
    <div className="container space-y-6">
      <Form />
      <SearchBar />
      <TableUser />
    </div>
  );
};

export default HomePage;
