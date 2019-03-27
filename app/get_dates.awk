BEGIN {
	end_t = mktime("2019 02 25 " hour " " minute " " second)
	FS="[: \\]]"
}

{
	now = mktime("2019 02 25 " $4 " " $5 " " $6)
	if(now <= end_t) {print}
}
