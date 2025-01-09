import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Result,
  Checkbox,
} from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const Ajout = () => {
  const [form] = Form.useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [specialiteDisabled, setSpecialiteDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFieldsChange = () => {
    const values = form.getFieldsValue();
    const isFormValid =
      values.nom &&
      values.prenom &&
      values.dateNaissance &&
      values.adresse &&
      values.numTelephone &&
      values.classe &&
      values.matiere && // Ensure Matiere is selected
      values.matiere.length > 0;

    setIsButtonDisabled(!isFormValid);
  };

  const onClasseChange = (value) => {
    if (["7eme", "8eme", "9eme", "1er"].includes(value)) {
      setSpecialiteDisabled(true);
      form.setFieldsValue({ specialite: undefined });
    } else {
      setSpecialiteDisabled(false);
    }
    onFieldsChange();
  };

  const onSubmit = () => {
    setIsSubmitted(true);
  };

  const onOkClick = () => {
    form.resetFields();
    setIsSubmitted(false);
  };

  const onChangeCheckbox = (checkedValues) => {
    // Check if "Paque" is selected
    if (checkedValues.includes("Paque")) {
      // Select all other subjects
      form.setFieldsValue({
        matiere: [
          "Mathématiques",
          "Physique",
          "Informatique",
          "Anglais",
          "Français",
          "Paque",
        ],
      });
    } else {
      form.setFieldsValue({
        matiere: checkedValues,
      });
    }
    console.log("Checked values: ", checkedValues);
  };

  if (isSubmitted) {
    return (
      <Result
        status="success"
        title="Inscription réussie !"
        subTitle="Votre inscription a été effectuée avec succès."
        extra={[
          <Button type="primary" key="ok" onClick={onOkClick}>
            OK
          </Button>,
        ]}
      />
    );
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        classe: "",
        specialite: "",
        matiere: [],
      }}
      onFieldsChange={onFieldsChange}
    >
      <Form.Item
        label="Nom"
        name="nom"
        rules={[{ required: true, message: "Nom obligatoire !" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Prénom"
        name="prenom"
        rules={[{ required: true, message: "Prénom obligatoire !" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date de naissance"
        name="dateNaissance"
        rules={[{ required: true, message: "Date de naissance obligatoire !" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Adresse"
        name="adresse"
        rules={[{ required: true, message: "Adresse obligatoire !" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Numéro de téléphone"
        name="numTelephone"
        rules={[
          { required: true, message: "Numéro de téléphone obligatoire !" },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Classe"
        name="classe"
        rules={[{ required: true, message: "Classe obligatoire !" }]}
      >
        <Select onChange={onClasseChange}>
          <Select.Option value="" disabled>
            Choisir votre classe
          </Select.Option>
          <Select.Option value="7eme">7ème</Select.Option>
          <Select.Option value="8eme">8ème</Select.Option>
          <Select.Option value="9eme">9ème</Select.Option>
          <Select.Option value="1er">1er</Select.Option>
          <Select.Option value="2eme">2ème</Select.Option>
          <Select.Option value="3eme">3ème</Select.Option>
          <Select.Option value="4eme">4ème</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Spécialité"
        name="specialite"
        rules={[
          {
            required: !specialiteDisabled,
            message: "Spécialité obligatoire !",
          },
        ]}
      >
        <Select disabled={specialiteDisabled}>
          <Select.Option value="" disabled>
            Choisir votre spécialité
          </Select.Option>
          <Select.Option value="Mathématiques">Mathématiques</Select.Option>
          <Select.Option value="Sciences expérimentales">
            Sciences expérimentales
          </Select.Option>
          <Select.Option value="Économie et gestion">
            Économie et gestion
          </Select.Option>
          <Select.Option value="Sciences techniques">
            Sciences techniques
          </Select.Option>
          <Select.Option value="Lettres">Lettres</Select.Option>
          <Select.Option value="Sciences de l'informatique">
            Sciences de l'informatique
          </Select.Option>
        </Select>
      </Form.Item>

      {/* Checkbox Section */}
      <Form.Item
        label="Matières"
        name="matiere"
        rules={[
          { required: true, message: "Sélectionner au moins une matière !" },
        ]}
      >
        <Checkbox.Group
          options={[
            "Mathématiques",
            "Physique",
            "Informatique",
            "Anglais",
            "Français",
            "Paque",
          ]}
          onChange={onChangeCheckbox}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={isButtonDisabled}
          onClick={onSubmit}
        >
          Inscrire
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Ajout;
