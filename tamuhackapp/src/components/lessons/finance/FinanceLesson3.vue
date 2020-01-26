<template>
  <div class="justify-center" id="finance">
    <v-container>
      <p class="text-muted">IRS 1040 > Lesson 1</p>
      <v-row class="justify-center">
        <h2 class="justify-center">
          Lesson 1:
          <strong style="color: #6c63ff">What is the IRS 1040?</strong>.
        </h2>
      </v-row>
      <v-divider></v-divider>
      <v-row class="ma-6 justify-center">
        <p
          class="title"
        >The IRS Form 1040 is one of the official documents that U.S. taxpayers can use to file their annual income tax return. The form is divided into sections where you can report your income and deductions to determine the amount of tax you owe or the refund you can expect to receive. Depending on the type of income you report, it may be necessary to attach other forms or schedules to it.</p>

        <p
          class="title"
        >The first page of Form 1040 is where you calculate your Adjusted Gross Income (AGI) and Taxable income. The first section requires you to enter information on all sources of income such as your wages and salary, tips, interest, dividends, taxable state and local tax refunds, taxable alimony, business income, capital gains, IRA and pension distributions, farm income, unemployment income and Social Security benefits.</p>

        <p
          class="title"
        >You will always find a box on the form to list “other income” you receive that doesn’t fit into one of the other categories. You must report all income you receive, regardless of where it comes from, unless it’s tax-exempt. The sum of all of these income items is known as your total income.</p>

        <p class="title">
          From your total income, the IRS allows you to claim specific deductions or adjustments to arrive at your AGI. Allowable adjustments include one-half of your self-employment tax payments, deductible alimony payments you make, IRA contributions, payments of student loan interest and health savings plan contributions, to name just a few. Your AGI is an important number since many deduction limitations are affected by it.
          The second page of Form 1040 begins with your AGI and allows you to reduce it further with either the standard deduction or the total of your itemized deductions. Itemized deductions include expenses such as mortgage interest, state and local income taxes or sales taxes, charitable contributions, and excess medical expenses as well as many others.
        </p>

        <p
          class="title"
        >If the total of your itemized deductions does not exceed the standard deduction for your filing status, then your taxable income will usually be lower if you claim the standard deduction.</p>

        <p
          class="title"
        >For tax years before 2018, you can then reduce your taxable income even more by one exemption for yourself, and one for each of the dependents you claim. After subtracting your exemptions, you are left with your taxable income, which is the amount subject to income tax.</p>

        <p
          class="title"
        >Beginning in 2018, exemption deductions are replaced with higher child tax credits and a new dependent tax credit.</p>

        <p
          class="title"
        >You must now figure out the amount of tax you owe on your taxable income by referencing the tax tables in your instructions. However, if you use software, such as TurboTax, to prepare your return, the tax will be automatically calculated for you. Comparing your total tax withholding to your tax bill at the bottom of Form 1040 will tell you whether you must make an additional payment or if you should expect a refund. If you are eligible for any of the tax credits listed on the form, make sure you reduce the amount of tax you owe by each credit before completing your Form 1040.</p>
        <v-img
          style="max-width: 40%; min-width: 40%;"
          class="ma-3"
          src="../../../assets/g3t2l1.svg"
        />
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  data: () => ({
    alignment: "center",
    justify: "center"
  })
};
</script>