"use client";
import { IBlogs } from "@/types/backend";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalAddNew from "./modalAddNew";
import ModalEdit from "./modalEdit";

interface Props {
  blogs: IBlogs[];
}

const TableApp = (props: Props) => {
  const { blogs } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [dataBlogs, setDataBlogs] = useState<IBlogs | null>(null);

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
          {blogs.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Button variant="primary">View</Button>
                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => {
                      setDataBlogs(item);
                      setShowModalUpdate(true);
                    }}
                  >
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
      <ModalEdit
        dataBlogs={dataBlogs}
        setDataBlogs={setDataBlogs}
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
      />
    </>
  );
};

export default TableApp;
