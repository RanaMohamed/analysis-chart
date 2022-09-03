import {} from "cypress";

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get("div.loading");
    cy.get("h1").should("be.visible").should("contain.text", "Analysis Chart");
    cy.get("h2")
      .should("be.visible")
      .should("contain.text", "Number of lessons");
    cy.get("h3")
      .should("be.visible")
      .should(
        "contain.text",
        "Please select country & camp to show lessons chart"
      );

    cy.get("#country").click();
    cy.get(".ant-select-item-option").contains("Egypt").click();

    cy.get("#camp").click();
    cy.get(".ant-select-item-option").contains("Kakuma").click();

    cy.get(".chart__canvas").should("be.visible");
    cy.get(".chart__legend")
      .should("be.visible")
      .within(() => {
        cy.get(".legend__title")
          .should("be.visible")
          .should("contain.text", "4095 Lessons\nin Kakuma");

        cy.get(".legend-item").should(
          "contain.text",
          "1410 Lessons\nin Kakuma Secondary"
        );
      });
  });
});
