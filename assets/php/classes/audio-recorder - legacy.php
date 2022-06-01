<?php
	namespace AudioRecorderLegacy;

	use Exception;
	use Throwable;
	use Error;

	// /**
	//  * Custom Form Input Generation
	//  * 
	//  * @param object $template_file
    //  * 
    //  * @param string $directory
    //  * 
    //  * @param array $question_types
    //  * 
    //  * @return string Form Input Html
	//  * 
	//  */
	class AudioRecorder
	{
		private $button_type;
		private $start_icon;
		private $stop_icon;

		function __construct($button_type = "btn-danger", $start_icon = "fa fa-play", $stop_icon = "fa fa-stop")
		{
            $this->button_type = $button_type;
            $this->start_icon = $start_icon;
            $this->stop_icon = $stop_icon;
		}
		
		public function show()
		{
            return '<div class="btn-group-sm nav btn-group" role="group">
                '.$this->display().$this->record_button().'
            </div>';
		}
		
		private function display()
		{
            return '<a class="btn-shadow btn '.$this->button_type.' p-0" href="#">
                '.$this->recording_indicator().$this->audio_player().$this->no_action().$this->loader().'
            </a>';
		}
		
		private function recording_indicator()
		{
            return '<h6 class="recording_indicator my-2" recording_indicator="pulse">recording</h6>';
		}
		
		private function loader()
		{
            return '<div class="recording_indicator my-2" recording_indicator="loader"><div bar="loader">0</div></div>';
		}
		
		private function no_action()
		{
            return '<h6 class="recording_indicator my-2 show" recording_indicator="no_action">
                Press Record Button <span no_action="info"> 
                    <i class="pe-7s-right-arrow"></i>
                </span>
            </h6>';
		}
		
		private function audio_player()
		{
            return '<audio controls="" class="container recording_indicator py-1" recording_indicator="player"
                style="background-image: linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) !important; padding: 10px; height: 40px">
            </audio>';
		}
		
		private function record_button()
		{   
            return '<a class="btn-shadow btn '.$this->button_type.'" href="#" style="width:50px" record_button="main" oncl ick=toggleRecording(this)>
                <span class="shadow">
                    '.$this->start_icon().$this->stop_icon().'
                </span>
            </a>';
		}
		
		private function start_icon()
		{
            return '<span class="'.$this->start_icon.' icon-gradient bg-happy-green record_button fa-1x my-2 show" record_button="start"></span>';
        }
		
		private function stop_icon()
		{
            return '<span class="'.$this->stop_icon.' icon-gradient bg-sunny-morning record_button fa-1x my-2" record_button="stop"></span>';
        }
	}