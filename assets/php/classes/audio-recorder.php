<?php
	namespace AudioRecorder;

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
		private $download_icon;
		private $button_type;
		private $start_icon;
		private $stop_icon;

		function __construct($button_type = "btn-danger", $start_icon = "fa fa-play", $stop_icon = "fa fa-stop", $download_icon = "fa fa-download")
		{
            $this->download_icon = $download_icon;
            $this->button_type = $button_type;
            $this->start_icon = $start_icon;
            $this->stop_icon = $stop_icon;
		}
		
		public function show()
		{
            return '<div class="btn-group-sm nav btn-group" role="group">
                '.$this->display().$this->record_button().'
            </div>'.$this->download_button();
		}
		
		private function logger()
		{
            return '<div class="recorder_log"></div>';
		}
		
		private function display()
		{
            return '<button class="btn-shadow btn '.$this->button_type.' p-0 record_container" type="button">
                '.$this->audio_player().$this->previewer().$this->logger().'
            </button>';
		}
		
		private function audio_player()
		{
            return '<audio controls class="container recording py-1"
                style="background-image: linear-gradient(360deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) !important; padding: 10px;">
			</audio>';                        
		}

		private function previewer()
		{
            return '<audio class="container preview py-1" autoplay muted controls="true"
                style="background-image: linear-gradient(180deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) !important; padding: 10px;">
            </audio>';
		}

		private function download_button()
		{
            return '<a class="btn-shadow btn btn-sm '.$this->button_type.' downloadButton" type="button">
				<span class="shadow">
					'.$this->download_icon().'
				</span>
			</a>';
		}
		
		private function record_button()
		{   
            return $this->start_button().$this->stop_button();
		}
		
		private function start_button()
		{
            return '<button class="btn-shadow btn btn-sm '.$this->button_type.' startButton" type="button">
				<span class="shadow">
					'.$this->start_icon().'
				</span>
			</button>';
        }
		
		private function stop_button()
		{
            return '<button class="btn-shadow btn btn-sm '.$this->button_type.' stopButton" type="button">
				<span class="shadow">
					'.$this->stop_icon().'
				</span>
			</button>';
        }
		
		private function download_icon()
		{
			return '<span class="'.$this->download_icon.' icon-gradient bg-light fa-1x d-flex">
				<span class="d-none d-sm-flex ml-3">Download</span>
			</span>';
        }
		
		private function start_icon()
		{
            return '<span class="'.$this->start_icon.' icon-gradient bg-happy-green fa-1x my-2"></span>';
        }
		
		private function stop_icon()
		{
            return '<span class="'.$this->stop_icon.' icon-gradient bg-sunny-morning fa-1x my-2"></span>';
        }
	}