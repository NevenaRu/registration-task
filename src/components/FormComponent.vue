<template>
  <div
    class="form-wrapper"
    v-if="!loadingData"
    @submit="createUser"
  >
    <form>
      <h1>{{ labels.RegistrationTitle }}</h1>
      <p>{{ labels.RegistrationIntroductionText }}</p>

      <!-- Salutation -->
      <div class="form-group">
        <div
          v-for="label in labels.SalutationSource"
          :key="label.ID"
          class="form-check form-check-inline"
        >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            :id="label.ID"
            :value="label.Name"
            v-model="user.salutation"
            :required="labels.Salutation.IsRequired"
          />
          <label
            class="form-check-label"
            for="salutation"
            >{{ label.Name }}</label
          >
        </div>
      </div>

      <!-- First name -->
      <div class="form-group">
        <label for="firstName"></label>
        <input
          :placeholder="`${labels.FirstName.FieldLabel}`"
          type="text"
          class="form-control"
          id="firstName"
          v-model="user.firstName"
          :required="labels.FirstName.IsRequired"
        />
      </div>
      <!-- Last name -->
      <div class="form-group">
        <label for="lastName"></label>
        <input
          :placeholder="`${labels.LastName.FieldLabel}`"
          type="text"
          class="form-control"
          id="lastName"
          v-model="user.lastName"
          :required="labels.LastName.IsRequired"
        />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email"></label>
        <input
          :placeholder="`${labels.Email.FieldLabel}`"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="user.email"
          :required="labels.Email.IsRequired"
        />
      </div>

      <!-- Password -->
      <div class="form-group">
        <label for="password"></label>
        <input
          :placeholder="`${labels.Password.FieldLabel}`"
          type="password"
          class="form-control"
          id="password"
          v-model="user.password"
          :required="labels.Password.IsRequired"
        />
      </div>

      <!-- Newsletter -->
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="newsletter"
          v-model="user.newsLetter"
          :required="labels.Newsletter.IsRequired"
        />
        <label
          class="form-check-label"
          for="newsletter"
          >{{ labels.Newsletter.FieldLabel }}</label
        >
      </div>

      <!-- Terms and Conditions -->
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="tac"
          v-model="user.terms"
          :required="labels.TermsAndConditions.IsRequired"
        />
        <label
          class="form-check-label"
          for="tac"
          >{{ labels.TermsAndConditions.FieldLabel }}</label
        >
      </div>

      <!-- Privacy Policy -->
      <div class="form-group form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="privacyPolicy"
          v-model="user.privacyPolicy"
          :required="labels.PrivacyPolicy.IsRequired"
        />
        <label
          class="form-check-label"
          for="tac"
          >{{ labels.PrivacyPolicy.FieldLabel }}</label
        >
      </div>

      <!-- Sumbit button -->
      <input
        type="submit"
        class="btn btn-primary"
        :value="labels.RegistrationSaveButtonLabel"
      />
    </form>
    <div>
      <a :href="labels.RegistrationLoginLink.url">
        <p>{{ labels.RegistrationLoginLinkLabel }}</p></a
      >
    </div>
  </div>
</template>

<script>
import httpService from "../api/http-service";

export default {
  data() {
    return {
      labels: {},
      loadingData: true,
      user: {
        email: "",
        firstName: "",
        lastName: "",
        newsLetter: false,
        password: "",
        privacyPolicy: false,
        terms: false,
        salutation: "",
      },
    };
  },

  methods: {
    async getLabels() {
      await httpService.getRegistrationLabels().then((response) => {
        this.labels = response.data;
        this.loadingData = false;
      });
    },

    async createUser() {
      await httpService.createUser(this.user).then(() => {
        alert("Hello! I am an alert box!");
      });
    },
  },

  created() {
    this.getLabels();
  },
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 40px 100px;
}

@media only screen and (max-width: 768px) {
  .form-wrapper {
    margin: 20px 30px;
  }
}
</style>
