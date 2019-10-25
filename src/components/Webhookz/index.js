import React, { useState, useEffect } from "react";
import { Button, Input, Icon, Table, Divider, Tag, Typography } from "antd";
import { createForm, loadForm } from "../../services/s_formz";
import { STATUSES, WEBHOOKS_API_URL } from "../../utils/u_constants";

const { Paragraph, Text } = Typography;

const columns = [
  {
    title: "Webhook",
    dataIndex: "unique_id",
    key: "unique_id",
    render: text => (
      <a>
        <Paragraph copyable>{`${WEBHOOKS_API_URL}/${text}`}</Paragraph>
      </a>
    )
  },
  {
    title: "Date Created",
    dataIndex: "created_at",
    key: "created_at"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>View Requests</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    )
  }
];

function Webhookz() {
  const [loading, setLoading] = useState(false);
  const [webhooksStatus, setWebhooksStatus] = useState(STATUSES.idle);
  const [webhooks, setWebhooks] = useState({});

  useEffect(() => {
    loadForm(1)
      .json(response => {
        setWebhooks(response);
        setWebhooksStatus(STATUSES.success);
      })
      .catch();
  }, {});

  const generateWebhook = () => {
    setLoading(true);

    const generatedName = Math.random()
      .toString(18)
      .substring(2, 9);

    createForm(generatedName, "", 1)
      .json(response => {
        if (response.name === generatedName) {
          setLoading(false);
          setTimeout(function() {
            window.location.reload();
          }, 100);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Button loading={loading} onClick={generateWebhook}>
        Generate Webhook URL
      </Button>
      {webhooksStatus === STATUSES.success && (
        <Table columns={columns} dataSource={webhooks} />
      )}
    </div>
  );
}

export default Webhookz;
