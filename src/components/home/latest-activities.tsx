import { UnorderedListOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import { Text } from "../text";
import { useList } from "@refinedev/core";
import { DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY } from "@/graphql/queries";

const LatestActivities = () => {
  const {
    data: audit,
    isLoading: isLoadingAudit,
    isError,
    error,
  } = useList({
    resource: "audits",
    meta: {
      gqlQuery: DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY,
    },
  });

  const dealIds = audit?.data?.map((audit) => audit?.targetId);
  const isLoading = true;
  return (
    <Card
      headStyle={{ padding: "16px" }}
      bodyStyle={{ padding: "0 1rem" }}
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <UnorderedListOutlined />
          <Text size="sm" style={{ marginLeft: "0.5rem" }}>
            Latest Activities
          </Text>
        </div>
      }
    >
      {isLoading ? (
        <List
          itemLayout="horizontal"
          dataSource={Array.from({ length: 5 }).map((_, i) => ({ id: i }))}
          renderItem={(_, index) => <LatestActivities key={index} />}
        />
      ) : (
        <List />
      )}
    </Card>
  );
};

export default LatestActivities;
