"useClient";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { IBlogs } from "@/types/backend";

type Props = {
  showModalUpdate: boolean;
  setShowModalUpdate: (v: boolean) => void;
  dataBlogs: IBlogs | null;
  setDataBlogs: (v: IBlogs | null) => void;
};

const ModalEdit = (props: Props) => {
  const { showModalUpdate, setShowModalUpdate, dataBlogs, setDataBlogs } =
    props;
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    if (dataBlogs && dataBlogs.id) {
      setId(dataBlogs.id);
      setTitle("");
      setAuthor("");
      setContent("");
    }
  }, [dataBlogs]);

  const handleSubmit = () => {
    if (!title || !author || !content) {
      toast.error("Failed");
      return;
    }
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.warning("update succeed");
          handleCloseModal();
          mutate(`http://localhost:8000/blogs`);
        }
      });
  };
  const handleCloseModal = () => {
    setShowModalUpdate(false);
    setTitle("");
    setAuthor("");
    setContent("");
    setDataBlogs(null);
  };

  return (
    <>
      <Modal
        show={showModalUpdate}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                type="text"
                placeholder="..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
                placeholder="..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEdit;
