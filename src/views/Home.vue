<template>
	<div class="home">
		<h1>Welcome Vue3 Gymnastic</h1>
	</div>

	<!-- <div class="maindiv" v-for="(workout, index) in workouts" :key="index">
		<router-link :to="{ name: 'DetailsPage', params: { id: workout[0].id } }">
			{{ workout[0].title }}
			<img :src="workout[0].mainimg" alt="" />
		</router-link>
		<router-link :to="{ name: 'DetailsPage', params: { id: workout[1].id } }">
			{{ workout[1].title }}
			<img :src="workout[1].mainimg" alt="" />
		</router-link>
	</div> -->


	<!-- <div v-for="workout in workouts">
		{{ workout[0].title }}
	</div> -->
	<div class="mainworkouts">
		<div v-for="workout, index in workouts" :key="index">

<div >
	<router-link :to="{name: 'DetailsPage', params: {id: workout.id}}">
		<div class="title">{{ workout.title }}</div>
	</router-link>

	<img :src="workout.mainimg" alt="">
</div>

</div>

	</div>
	

</template>

<script>
// @ is an alias to /src
import workoutDB from "@/gymdb.json"

export default {
	name: "Home",
	components: {},
	data() {
		return {
			workouts: [],
		};
	},

	mounted() {
		this.workouts = this.$workout;
		// fetch("https://creativegibbs.github.io/gymapi/gymdb.json").then((res) =>
		// 	res.json().then((data) => (
		// 		this.workouts = data
			
		// 		)
		// 	)
			
		// );
		console.log(this.workouts)
	},

	// mounted() {
	// 	fetch("http://localhost:3000/workouts").then((res) =>
	// 		res.json().then((data) => (this.workouts = data))
	// 	);
	// },
};
</script>

<style>
.maindiv {
	display: flex;
	flex-direction: column;
}

img {
	width: 150px;
	height: 150px;
}
</style>
