import { Avatar, Button, Card, Popconfirm, Rate, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {
  adminDelete,
  getUnverifiedComments,
  validateComment
} from '../../features/comments/commentsSlice';

const Admin = () => {

  const { comments } = useSelector(state => state.comments);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const launchGetUnverified = async () => {
    setLoading(true);
    await dispatch(getUnverifiedComments());
    setLoading(false);
  }

  useEffect(() => {
    launchGetUnverified();
  }, [])

  const handleValidate = async (id) => {
    await dispatch(validateComment(id));
  }

  const handleDelete = async (id) => {
    await dispatch(adminDelete(id));
  }


  const comment = comments.map(comment => {
    return (
      <div key={comment._id}>
        <Card>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link to={`/route/${comment.routeId?._id}`}>
              <Tag color="geekblue">{comment.routeId?.name}</Tag>
            </Link>
          </div>
          <Card.Meta
            title={<><Avatar src={comment.userId.avatar} /> {comment.userId.name}</>}
            description={new Date(comment.createdAt).toLocaleString()}
          />
          <p style={{ marginTop: "10px", overflowWrap: "break-word" }}>{comment.body}</p>
          <div>
            <Rate disabled defaultValue={comment.valoration} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: "10px" }}>
            <Button type="primary" onClick={() => handleValidate(comment._id)}>Aprobar</Button>
            <Popconfirm
              title="¿Seguro que quieres eliminar este comentario?"
              onConfirm={() => handleDelete(comment._id)}
              okText="Eliminar"
              okButtonProps={{ type: "danger" }}
              placement="bottomRight"
              cancelText="Cancelar">
              <Button type="primary" danger>Eliminar</Button>
            </Popconfirm>
          </div>
        </Card>
      </div>
    )
  })

  return (
    <div style={{ marginBottom: "80px" }}>
      <h1>Administración</h1>
      <div>
        {loading ? <div>Cargando...</div> :
          comment.length ? comment : <div>No hay comentarios para moderar</div>
        }
      </div>
    </div>
  );
}

export default Admin