export function combineLayoutScreen(
  Layout: React.FC<{ children: JSX.Element }>,
  Screen: React.FC
) {
  return (
    <Layout>
      <Screen />
    </Layout>
  );
}
