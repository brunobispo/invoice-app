import { Container, Panel } from "./style";
import Backdrop from "components/atoms/Backdrop";

type InvoicePaneProps = {
  isElevated?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

const InvoicePane = ({
  isElevated = false,
  onClose,
  children,
}: InvoicePaneProps) => (
  <Container>
    {isElevated && <Backdrop onClick={onClose} />}

    <Panel isElevated={isElevated}>{children}</Panel>
  </Container>
);

export default InvoicePane;
