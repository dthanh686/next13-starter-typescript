"use client";
import { IBlogs } from "@/types/backend";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import ModalAddNew from "./modal";
import { useState } from "react";

interface Props {
  blogs: IBlogs[];
}

const TableApp = (props: Props) => {
  const { blogs } = props;
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>Table Blogs</h3>
        <Button
          className="my-3"
          variant="primary"
          onClick={() => setShowModal(true)}
        >
          Add New
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Button variant="primary">View</Button>
                  <Button variant="warning" className="mx-3">
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalAddNew showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default TableApp;
