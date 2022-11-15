<template>
	<h1>DetailsPage Workouts 2022</h1>
	<p>The workout ID is:{{ id }}</p>

<div class="mainworkouts">
	
	<div v-for="(training, index) in workouts.exercise" :key="index">
	<!-- {{workout}} -->
	<p class="fw-bold text-white">Exercise:{{training.name}}</p>
	<img :src="training.image" alt="">
	<p>Equipment: {{training.equipment}}</p>
	<p>Mechanics: {{training.mechanics}}</p>
	<p>Muscle Target: {{training.muscletarget}}</p>
	<p>Secondary Muscles: {{training.secondarymuscles}}</p>
	<!-- {{index}} -->
</div>

</div>

<!-- <div v-for="workout in workouts.exercise">
{{workout.exercise}}
</div> -->

	<!-- <div class="resultdiv" v-for="exercise in workouts.exercise">
		<div class="details">
			{{exercise}}
			<h1>{{ exercise.name }}</h1>
			<div>{{ exercise.equipment }}</div>
			<div>{{ exercise.mechanics }}</div>
			<div>{{ exercise.muscletarget }}</div>
			<div>{{ exercise.secondarymuscles }}</div>
		</div>
	</div> -->
</template>

<script>
	import workoutDB from "@/gymdb.json"
export default {

	
	// id: $route.params.id,
	props: ["id"],
	data() {
		return {
			workouts: [],
			// id: this.$route.params.id,
		};
	},

	mounted() {
		this.workouts = this.$workout[this.id - 1]
	},
};
</script>

<style scoped>
/* .resultdiv {
	display: flex;
	flex-direction: column;
}

.details {
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
}

.details h1 {
	background: crimson;
	color: aliceblue;
} */
</style>
