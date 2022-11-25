import { Card, Form, Row, Col, Input, Select, DatePicker, Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./SignUp.css";

const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [isExistUserName, setIsExistUserName] = useState("");
  const [isExistEmail, setIsExistEmail] = useState("");

  const cities = ["İstanbul", "İzmir", "Çanakkale"];

  const handleUserNameExist = (userName) => {
    setIsExistUserName(true);

    // burada aslında girilen kullanıcı adının daha önce kullanılmış mı kontrolünü yapıyoruz.
    // //isExist false durumunda
    // form.setFields([{
    //   name: 'username',
    //   errors:['Kullanıcı adı mevcut'];
    // }])
  };

  
  const registerUser = () => {
    // burada ilgili istek atılacakk.
    const params = {
      name: form.getFieldValue('name'),
      surname: form.getFieldValue('surname'),
      username: form.getFieldValue('username'),
      email: form.getFieldValue('email'),
      gender: form.getFieldValue('gender'),
      password: form.getFieldValue('password'),
      city: form.getFieldValue('city'),
      birthdate: form.getFieldValue('birthdate')
    }
    alert(`Kullanıcı kaydı oluşturuldu! \n ${JSON.stringify(params)}`)
    console.table(params)

    //navigate('/auth/sign-in')
  }

  const validateEmail = (email) => {
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email);
  }

  const handleValidate = () => {
    form.setFields([
      {
        name: "name",
        errors: form.getFieldValue("name") ? [] : ["Adınızı yazınız"],
      },
      {
        name: "surname",
        errors: form.getFieldValue("surname") ? [] : ["Soyadınızı yazınız"],
      },
      {
        name: "username",
        errors: form.getFieldValue("username") ? [] : ["Kullanıcı adı yazınız"],
      },
      {
        name: "email",
        errors: validateEmail(form.getFieldValue("email")) ? [] : ["Email adresinizi yazınız"],
      },
      {
        name: "birthdate",
        errors: form.getFieldValue("birthdate") ? [] : ["Doğum tarihi seçiniz"],
      },
      {
        name: "password",
        errors: form.getFieldValue("password").length > 5 ? [] : ["En az 5 karakterli bir parola yazınız"],
      },
    ]);

    const errors = form.getFieldError();
    let isExistError = false;
  
    for(let i = 0; errors.length; i++){
      if(errors[i].errors.length > 0){
        isExistError = true;
        break;
      }
      isExistError = false;
    }
    if(!isExistError){
      registerUser();
    }
  };

  return (
    <Card className="sign-up-card">
      <div className="sign-up-logo-wrapper">
        <img src={logo} alt="logo" width="50%" />
      </div>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        initialValues={{
          name: "",
          surname: "",
          username: "",
          email: "",
          birthdate: "",
          password: "",
        }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Ad"
              required
              name="name"
              rules={[
                {
                  required: true,
                  message: "Lütfen adınızı giriniz.",
                },
              ]}
            >
              <Input placeholder="Adınız" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="Soyad"
              required
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Lütfen soyadınızı giriniz.",
                },
              ]}
            >
              <Input placeholder="Soyadınız" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="Cinsiyet"
              required
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Lütfen cinsiyetinizi seçiniz.",
                },
              ]}
            >
              <Select allowClear placeholder="Cinsiyet seçiniz">
                <Select.Option key="female">Kadın</Select.Option>
                <Select.Option key="male">Erkek</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Kullanıcı Adı"
              required
              name="username"
              rules={[
                {
                  required: true,
                  message: "Lütfen bir kullanıcı adınızı giriniz.",
                },
                {
                  min: 3,
                  message: "Minimum 3 karakter olmalıdır.",
                },
              ]}
            >
              <Input.Search
                onChange={(e) => handleUserNameExist(e.target.value)}
                placeholder="Kullanıcı adı"
                loading
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Email"
              required
              name="email"
              rules={[
                {
                  required: true,
                  message: "Geçerli bir email giriniz.",
                  type: "email",
                },
              ]}
            >
              <Input.Search placeholder="Email" loading />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Doğum Tarihi"
              required
              name="birthdate"
              rules={[
                {
                  required: true,
                  message: "Lütfen bir tarih giriniz.",
                },
              ]}
            >
              <DatePicker placeholder="YYYY-MM-DD" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Şehir"
              required
              name="city"
              rules={[
                {
                  required: true,
                  message: "Geçerli bir şehir giriniz.",
                },
              ]}
            >
              <Select placeholder="Yaşadığınız şehir" allowClear>
                {cities.map((city) => {
                  return <Select.Option key={city}>{city}</Select.Option>;
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item
              label="Parola"
              required
              name="password"
              rules={[
                {
                  required: true,
                  message: "Lütfen bir parola giriniz.",
                },
                {
                  min: 5,
                  message: "Lütfen en az 5 karakterli bir parola yazınız.",
                },
              ]}
            >
              <Input.Password placeholder="Parola" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Button onClick={handleValidate} type="primary" block>
              Kayıt ol
            </Button>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Button
              type="link"
              block
              onClick={() => {
                navigate("/auth/sign-in");
              }}
            >
              Giriş yap
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default SignUp;
