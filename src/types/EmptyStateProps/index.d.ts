type EmptyStateProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  primaryAction: {
    content: string;
    onAction: () => void;
  };
};
