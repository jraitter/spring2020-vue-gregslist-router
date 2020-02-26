<template>
  <div class="job-details">
    <div v-if="jobData._id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Title: {{ jobData.jobTitle }}</h5>
          <h6 class="card-title">Company: {{ jobData.company }}</h6>
          <p>Description: {{jobData.description}}</p>
          <p>hours: {{jobData.hours}} --- rate: ${{jobData.rate}}</p>
        </div>
      </div>
      <button @click="deleteJob">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  mounted() {
    // NOTE if we have no jobs in state
    if (!this.$store.state.jobs.length) {
      // NOTE Go get the job by its id
      this.$store.dispatch("getJobById", this.$route.params.jobId);
    } else {
      // NOTE otherwise, set the job as the active job, based on its ID
      this.$store.dispatch(
        "setActiveJob",
        this.$store.state.jobs.find(j => j._id == this.$route.params.jobId)
      );
    }
  },
  computed: {
    jobData() {
      return this.$store.state.activeJob;
    }
  },
  methods: {
    deleteJob() {
      this.$store.dispatch("deleteJob", this.jobData._id);
    }
  }
};
</script>

<style></style>
