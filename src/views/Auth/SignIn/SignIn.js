import { Button, Card, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";

import "./SignIn.css";

const SignIn = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {};

  return (
    <Card className="sign-in-card">
      <div className="sign-in-logo">
        <img alt="logo" src={logo}  width="50%" />
      </div>
      <Form
        form={form}
        name="login_form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        onFinish={onFinish}
        className="sign-in-form"
      >
        <Form.Item
          label="Kullanıcı Adı"
          name="username"
          rules={[
            {
              required: true,
              message: "Kullanıcı adı giriniz",
            },
          ]}
        >
          <Input autoFocus placeholder="Kullanıcı adı" />
        </Form.Item>

        <Form.Item
          label="Parola"
          name="password"
          rules={[
            {
              required: true,
              message: "Lütfen parolanızı yazınız",
            },
            {
              min: 5,
              message: "Parola en az 5 karakterli olmalıdır.",
            },
          ]}
        >
          <Input.Password placeholder="Şifre" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button block type="primary" htmlType="submit" className="w-full">
            Giriş Yap
          </Button>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="link" htmlType="submit"
           block
           onClick={() => navigate('/auth/sign-up')}
          >
            Kayıt Ol
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SignIn;
