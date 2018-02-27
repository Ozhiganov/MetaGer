@extends('layouts.subPages')

@section('title', $title )

@section('content')
	<div class="card-medium">
		<h1>{{ trans('websearch.head.1') }}</h1>
		<p>{{ trans('websearch.head.2') }}</p>
		<h2>{{ trans('websearch.head.3') }}</h2>
		<form class="metager-searchform" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}/meta/meta.ger3" method="GET" accept-charset="UTF-8" >
			<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"><img class="metager-logo" title="{{ trans('websearch.head.4') }}" alt="MetaGer" src=" data:image/jpeg;base64,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"></a>
			<input class="metager-searchinput" name="eingabe" placeholder="{{ trans('websearch.head.5') }}" required="">
			<input type="hidden" name="lang" value="{{ trans('websearch.head.6') }}">
			<input type="hidden" name="encoding" value="utf8">
			<button class="metager-searchbutton" type="submit">{{ trans('websearch.head.8') }}</button>
		</form>
	</div>
	<h2>{{ trans('websearch.head.7') }} <button id="copyButton" class="btn btn-default" type="button"><i class="fa fa-paperclip" aria-hidden="true"></i> {{ trans('websearch.head.copy') }}</button></h2>
	<textarea id="codesnippet" readonly style="width:100%;height:500px">
		<form class="metager-searchform" action="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}/meta/meta.ger3" method="get" accept-charset="UTF-8" >
			<style type="text/css" scoped>
				.metager-searchinput {
				height: 30px;
				float: left;
				padding: 6px 12px;
				font-size: 14px;
				line-height: 1.42857;
				color: #555;
				background-color: #FFF;
				background-image: none;
				border: 1px solid #CCC;
				margin:0px;
				}
				.metager-searchbutton {
				height: 30px;
				border-left: 0px none;
				border-top-right-radius: 4px;
				border-bottom-right-radius: 4px;
				border-top-left-radius: 0px;
				border-bottom-left-radius: 0px;
				border: 1px solid #CCC;
				padding: 6px 12px;
				margin:0px;
				font-size: 14px;
				font-weight: normal;
				line-height: 1;
				white-space: nowrap;
				color: #555;
				text-align: center;
				background-color: #EEE;
				}
				.metager-logo {
					height: 18px;
					float: left;
					margin: 6px;
				}
			</style>
			<a href="{{ LaravelLocalization::getLocalizedURL(LaravelLocalization::getCurrentLocale(), "/") }}"><img class="metager-logo" title="{{ trans('websearch.head.4') }}" alt="MetaGer" src=" data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/AABEIACcAuAMBIgACEQEDEQH/xACcAAACAwEBAQEAAAAAAAAAAAAABgUHCAMEAgkQAAEDBAIBAwMDAgUFAAAAAAECAwQABQYRBxIhE1FhMUFxFCIygZEVFiM0QkNScoKhAQACAwEBAAAAAAAAAAAAAAAFBgIEBwMBEQABBAAEBAQEAggHAAAAAAACAQMEBQAGERITFCExIjJRcTNBgZEHUhUWIyRCU2HBYnODobHR4f/aAAwDAQACEQMRAD8A/SHKb8jGrJIuKm/V9LqEo312SQNbqp4PNYmTY8c2oIDrqUFXq71s6qT5rnejYIsUfWRJBP4QN1n52Gq3xrPM1r1ypY+ei9VjWc823dbmHloMjhsx2myeDai+ZcatlHLFRPo0kzGtzz7rgs+JR8o/09sbnB2AaQM4zuPhzcZPo/qH3ySGwrWkj/kadGpLaYCJC1AI9ELKj9AOuyayNkFwdy29Xa6r2YsRshv2A31QP6015zzI/UVTSQy/fJI6tfPaI9SPCxlKhZtLF1ZgryrC+P8AxEXQR+q4urD+TXMrvCYAtvoj01LU56nbQFW1WceEIHebc5pH8GkNj8k7NPOZ8oQsckqgxGhKlp/kN6Qg+xNV8tZnNrKzdpeTOrhlsLag9NdERETFnMOXkdzI5XU0Xo2A7h3L6aqqqvbFq0VnFzlDOYjYmSbOhMUkfuLSkjR+at7Esxg5bbVyWUlt1rw60TspOvt7g0cq8301tI5VozB3ZuEHBUCIfVNe+A9jle1rY3MOgBtb9pG2SEIl6Lp2ww3O5RLRBfmynPTZZT2Ufj4rw4/kVtyaEqXBUtTaXCjakkeRWZM5znIL2ldulx/0rKXipKeqklaUkhO9018XX3Io7sC0It3WC4ta1yC2sEggnfalqN+ILMzMwwWmz5ZA2qfDXerqronsmDz+R3YuXjmukHMqe5B4ibUBE1X3XGjqKpzM+VGrHNXbrdHEmSg6WtRPVKvYAeSaTH+Ts+tqUSJtsbbZWfBWypIPwDRudnuggyXWCN9wmfim22pCHuuBMPJl1MYbeQG2xd+EDjiCReyY0rXCVKjwmFvvuJaaQNqUo6AH5pUwrL4+X2wyEtlp5pfR1v2Otgg+xqjeVsskXW7qtEZZEaMoBYB/m5U7vN8CsogtGC46P9I4fmIsQp8rzrG6KudHgEx8Yvyjh8vHNFmhuqbgRXJmjruVdEGl9nnJ71B61oT0356unY/uKYMJ4stcSEzLu7IkyXEhXpr/AIIB8gap4umB4vc4i2FW6O0eukrbQEqSfcEUtMxPxGsY/OLYxopF4wj8NPsqqmGB2VkOBI5RIL8kQXYcjiL90TH1i2aWbK2j+kWUPIG1sL8KHz8j5FN9ZzxfjPK7NkTcxt5lllh8gKKtlxvfkaHuKvS93uBj9ucmznOjaB9PqVH7AD7mmjLlvaPVTj91G5RxjdvMvCJIP8WF2+rK9qzbZqH1ktv7dgD4iEi+WJiis7O8s5NdpK0WS090J+3QuK17nXgVK45y3IduaLffIYjLUsI9RII6qP0CkmuDOfcuvPtto64IuntB0m1ECL3x2dyVfMsm4rQEQBuNoXEIxH2xedFQeR3c2SxTbikBZYZK0hR8E/YVTNp5jlOsTX58VhIZbHpJbJ2tZOgnzRK0zTT08pmLLe2OOgpB4V02p6rgfXZdtrSM5Jis7m2jEfN13LjQg+o/NFU3x9nV+yu8yGJcdluOhnuOqSCDvQGzRV6ntol3DSXG3o2pKKbh07Yo20CbTS+Vf4W9BQl0PXvhJ5tn+teYEMHwwwVkfKzUfn1oNuxbFvGilhST+VgKqMzNxV95DdZSewMllgD4GgatPmSIP8rQlAf7eQgfgFJFYlLY/S365WHm4Si2H+mSf2TGwRnv0Z+qUL824zT/ADE/7LEXmeWmNgVqiML/ANefFbCtHyEADZpSvloOMceQmnB1k3OQlx73AHkD+lR2DWuTmORQUydqjW9pHf2CUfxH9TTJzZOC7nboKT4ZYUoj5WdCuUuU/ZUU+9fHaPAbhRA99ENcTiRmq+5gUzPm47kuWqfVQH6YYeOlCw8e3K6kaWv1XE/PQdRVHWW6xY+QNXG6NLktpdLq0jRKl/Ub3WkhZnk8VfoWkkuqt3fX3KiO5FUtxg7ZGsgWzdm2S26yUoLoBSF7B+/gGpXsKSy9lOv4gMAMYSE3B1Diquq6pjymmR3Wc0T+Gb5k8Q7A8/DTomi4d75y3Y7vZpcAW18esypA300NiozhBTv+M3ADfQxklQ+e1PGVX/A8Y9BCbXBmOOK8obQglKfcmnXE5FluNsTcrbbkw0vAjXpJQSAfj6imeDXSZ+aYz0q4iyZEACImmm9q7VT1TC5LnsQstvsx6iSwxONNrrrm5Nw/0xnHlCSbjm8hlHkNhtkfmtSQG49mssdLig21HjJClE60Ep8msirksyc9U/LWEtm6bcUrwAEr+9XnyhdUSsLdXb30utF9tDqm1A6H10SKH5VsmYzma7gkQ3UcIgDXxaDquCGZK9yQ3lmpTUG1bFDP+HUtE++FS6Zjxyzdf1MWyqlyEO9/VQOoK9/JqGzfkhvJLGYAtT0bs6lQWsgjSPau3EMrHIrs9dxXHRIHUtKdIGk689Saj+VcmiX2ZGYgAKixSoeqkftWs/YH4FB51pOfyrIsOfhsrN3CcRlkdxddF3LgpDrYTOZ48FIUp7lNpc268W1OmqbU7YeOFYymLJc5Z/6j2k/+iapuzJFzzaMHvPrXHat/+e60dxamG3iENpt1tS1Ba3EggkFSvuKzvktumYhlzqgkpLcn12FfZSe3YVO+iLCyxlR/TfHYNCe2+p6FiNLKSZmHMzO7ZIfBRZ+Xk1HG0B+1IHtWeb3yRm0S7TWolvBjtPrS2pTCztIOt7qw7Lydi1yhtrfmIivdR3bc8EH76P0IqNyXk7FYsCS3FkCVIW0pKA2kkAkaBKq0K/tq6fVtvRMwBCQE3bmyQiLp20wi0tZPhWJsyaI5ZEu3aQqIj1764S8W5Pym+ZBBt7jcYIed0vTZBAA2fvUZzTeHX71HtoUQ1HaCiPda68PD0JUvKjJIJTHYWrevHZegK4cvQ3WMuW+sHo+y2UH8DRFZvLn3cv8AD16RJkPPceeI7y/lon/GuH+NCqIuemWI8cG+DCI9g/zFxL4XyPYcVsyIZtz63iSp1xPX9xNJGa5FDya+C4Q462AUISQrW9g/FaAsTuBP47FmOtW4BLCfV7pR2CgPIINQeNZThuQ3gW9rHm0rK1em4GUKBA/5GiMiqlS62sq376ELT3CVhoGfF4e3VMD41nGi2FhZM0kwnW96Pmbvh69+i49XJVwcjcfxmlkhyUGEK9z47UmcP4rDubsm5zGg4hhYQ0lQ2O2tk6qR5wmgKtUFOgEpW4R/ZIp/4pgiFh0RRT+59S3D/U6FEwiNW/4kIy8nFbrYo+by7hRP7rigcl2ryBxGi4TlhKLy/lVf/MWGyww0oFttCN6G0gDxRXYfyH5orYRFsE2j0TGWERmupdVxV8Pim3RL+m8mY+44l9T3QhPXZJNOGT4yzk9oXb5C1toWtKu6NEgpO/vRRQdijqYsWRFaigLMjdxR6+Ld31wSdubORIYkuSCV2Og8Iunh29sePE8Kg4dGejx1LcU6vstxet/A8fYVA5JxbCyW7m4yJkhClJSAhPUjSPzRRUHKGoegBAOKCxmiRQa66IuPWby1bnuzBlGj7nmc+eLHbieiwhoJ/YlISB4+gGqqnIeHbPdZSpUd1yE44SVJTooJ9wKKKsWFLV27AMTYwPAHkRe4+ypjnX29lVvG7FkG2Z+fTsXumI618I2qM+l2bMelJSd9AAhJq5GIbcRhDDLYbabSEpQnQAAoorlV0VTS6jBjAzxPOqdVX6ridnd2lsm6ZINzh+ROyJ9ExVl/4etF6nuzWn3YqnVFTiU6UkqV9SAaaLPgtsteOrsrgMiO6SXCvQKir8UUVBjLNHGlPyWobYuvioOF6oXfp2x0dzDcyIbTLksyBlUJtPRR7de+EU8HWcySoTpIa7b9PxvXtumu6cZY9cbRHtyGVMIjkltxsjsCfqTuiiq7WUcuRgcBqvZQXvCfTXVO+nXHaRme+ecYM5zqkz4gXXTRcdMP49h4e/IejyHnlPICT36gAA78aqeyDFLTkkb0bhHC+v8AFYOlJPwaKKIs0tWxBSAEYOW6/sl6p198UHLaxfmc8cg+Z6ftE6L/ALYqeRwXDUsli5vIT9gpAURXugcIWdhYXLlyHwPsNITRRQMciZVaPijXhr6Kqqn2XBhc65mdHglPPb6oiIv3xa1qsVuscYR4EVthA/7QP7k1H5JidryiIGJzRJT5Q4nQUj8GiimI4EJ2IcM47ax1DbwtPDp7YBtzZbUxJAPuI9ru4mvi198VSeCoxcJTdXQ2T9C2KsrFsEtGKNqMRtS3l+FvrIKj8Ciig1dlSgq5CSYsIAd+RaqW3217YLWGZryxY4EiYZt/MURB199O+IbLONIeWXJMyRMfaUloICEdSAB+aebVakWq3R4TOy3HbS2CdbIAooorGqa6HMelsxxF+R8Vz5lga/azpUVmK66pMs/DD5DiRDawR4/+0UUUSXFDH//Z"></a>
			<input class="metager-searchinput" name="eingabe" placeholder="{{ trans('websearch.head.5') }}" required>
			<input type="hidden" name="encoding" value="utf8">
			<button class="metager-searchbutton" type="submit">{{ trans('websearch.head.8') }}</button>
			<input type="hidden" name="wdgt-version" value="1">
			<input type="hidden" name="lang" value="{{ trans('websearch.head.6') }}">
		</form>
	</textarea>
	<script src="{{ elixir('js/widgets.js') }}"></script>
@endsection
