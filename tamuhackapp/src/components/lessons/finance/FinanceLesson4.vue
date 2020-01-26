<template>
  <div class="justify-center" id="finance">
    <v-container>
      <p class="text-muted">IRS 1040 > Lesson 2</p>
      <v-row class="justify-center">
        <h2 class="justify-center">
          Lesson 1:
          <strong style="color: #6c63ff">How to fill the IRS 1040</strong>.
        </h2>
      </v-row>
      <v-divider></v-divider>
      <v-row class="ma-6 justify-center">
        <p
          class="title"
        >Depending on your tax situation, you may also need to attach other forms or schedules to your 1040. This allows you to do things like claim specific deductions or to report certain types of income. Read on for a closer look at the 1040 and what you need to do in order to use it.</p>

        <p
          class="title"
        >There are two pages of the 1040. The first page asks for your basic personal details. This includes your name, address, Social Security number (SSN) and filing status. If you’re filing jointly, you also need to add the name and SSN of your spouse.</p>

        <p
          class="title"
        >Filers with dependents need to add the names, SSNs and the relationship (to the filer) of each dependent. There is a box beside each dependent that you can check if you’re claiming the child tax credit or credit for other dependents.</p>

        <p
          class="title"
        >You will also see a box that you should check to certify that you, your spouse (if you file jointly) and all of your dependents had qualifying health care coverage or a coverage exemption for all of the year.</p>

        <p
          class="title"
        >The final part of the first page requires you to sign and then write in your occupation. You should do this after you have completed the rest of the form. If you work with a tax preparer to file your 1040, your preparer will also sign and enter his or her information.</p>

        <p
          class="title"
        >Next up, on the second page of the form, things get a bit math-y. Lines 1 through 7 are all about your income. If you have a W-2, you will need to enter the earnings information from that form. You also need to attach any and all W-2 forms you have. Then you will enter information on any interest, dividends, pensions, annuities, individual retirement account (IRA) distributions or Social Security benefits. Using all these sources of income, you will calculate and enter your adjusted gross income on line 7.</p>

        <p
          class="title"
        >Taking these deductions will require you to attach additional forms to your return. Previously, the 1040 included a 15-line section that took filers through a number of the available above-the-line deductions. Since not all tax filers make adjustments, this section was removed from the 1040 and spread across Schedules 1 through 6. So, for example, if you want to claim an above-the-line deductions for the self-employment tax, you will need to attach two forms. Schedule 4 now allows you to say that you’re claiming the deduction and then you need to attach Form SE to actually claim it.</p>

        <p
          class="title"
        >Note that some deductions that existed in previous years were eliminated with the next tax law. Examples of defunct deductions are those for moving expenses and college tuition and fees.</p>

        <p
          class="title"
        >Once you’ve made necessary adjustments and found your AGI, there are some other taxes and credits to consider. First of all, you need to enter (on Line 8) either your standard deduction or the amount of your itemized deductions. If you have a qualified business income deduction, you will enter that on Line 9. Lines 10 through 15 allow you to enter the amounts of certain credits (if you qualify for them). As just one example, you can enter the amount of your child tax credit on Line 12a.</p>

        <p
          class="title"
        >If you have already had some federal income tax withheld from your income, you can enter that amount on Line 14. You will also need to attach Schedule 4 if you have paid other taxes.</p>
        <v-img
          style="max-width: 40%; min-width: 40%;"
          class="ma-3"
          src="../../../assets/g3t2l2.svg"
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