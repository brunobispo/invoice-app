import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pageMaxWidth: string;
    backgroundColor: string;
    primaryColor: string;
    borderRadius: string;
    paperColor: string;
    paidColor: string;
    refundedColor: string;
    pendingColor: string;
    boxShadow: string;
  }
}
