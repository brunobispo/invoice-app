import { connect } from "react-redux";
import Container from "components/atoms/Container";
import DateButton from "components/molecules/DateButton";
import Button from "components/atoms/Button";
import InvoiceList from "components/organisms/InvoiceList";
import TotalSummary from "components/organisms/TotalSummary";
import { InvoiceType } from "types";
import { RootState, AppDispatch } from "state/store";
import {
  getCurrentMonth,
  getCurrentMonthInvoices,
  getCurrentMonthPaid,
  getCurrentMonthPending,
  getCurrentMonthRefunded,
  getCurrentMonthTotal,
} from "state/dashboard/selectors";
import { setCurrentMonth } from "state/dashboard";

type DashboardProps = {
  total: number;
  pending: number;
  paid: number;
  refunded: number;
  items: InvoiceType[];
  currentMonth: Date;
  onChangeMonth: (date: Date) => void;
};

const Dashboard = ({
  total,
  pending,
  paid,
  refunded,
  items,
  currentMonth,
  onChangeMonth,
}: DashboardProps) => (
  <>
    <Container>
      <DateButton date={currentMonth} onChange={onChangeMonth} />
    </Container>
    <Container>
      <TotalSummary
        total={total}
        pending={pending}
        paid={paid}
        refunded={refunded}
      />
    </Container>
    <Container>
      <Button>+ Create Invoice</Button>
    </Container>
    <Container>
      <InvoiceList items={items} />
    </Container>
  </>
);

const mapStateToProps = (state: RootState) => ({
  items: getCurrentMonthInvoices(state),
  total: getCurrentMonthTotal(state),
  pending: getCurrentMonthPending(state),
  refunded: getCurrentMonthRefunded(state),
  paid: getCurrentMonthPaid(state),
  currentMonth: getCurrentMonth(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onChangeMonth: (date: Date) => dispatch(setCurrentMonth(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
